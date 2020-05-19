const User = require('../models/User');
const formidable = require('formidable');
const fs = require('fs');


exports.landing = (req, res) => {
    return res.send("All good");
}

exports.addNewUser = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'image could not be uploaded'
            })
        }

        const { firstName, lastName, friends } = fields
        if (!firstName || !firstName.length) {
            return res.status(400).json({
                error: 'First Name is required'
            })
        }
        if (!lastName || !lastName.length) {
            return res.status(400).json({
                error: 'Last Name is required'
            })
        }
        if (!friends || !friends.length === 0) {
            return res.status(400).json({
                error: 'Please add atleast one friend'
            })
        }
        let user = new User()
        user.firstName = firstName
        user.lastName = lastName

        //friends
        let arrayFriends = friends && friends.split(',')
        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'image should be less the 1 Mb in size'
                })
            }
            user.photo.data = fs.readFileSync(files.photo.path)
            user.photo.contentType = files.photo.type
        }

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            arrayFriends.map((arr) => (
                User.findByIdAndUpdate(arr, { $push: { friends: result._id } }, { new: true }).exec((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: err
                        })
                    }
                })
            ))
            User.findByIdAndUpdate(result._id, { $push: { friends: arrayFriends } }, { new: true }).exec((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    })
                } else {
                    res.json(result)
                }

            })
        })
    })
}

exports.list = (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 5;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    User.find({})
        .populate('friends', '_id firstName lastName')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('_id firstName lastName friends')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                })
            }
            res.json(data)
        })


}

exports.listFriends = (req, res) => {
    const firstName = req.params.firstName
    User.findOne({ firstName })
        // .select("-photo")
        .populate('friends', '_id firstName lastName')
        .select('_id friends')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                })
            }
            res.json(data)

        })

}

exports.singleUser = (req, res) => {
    const firstName = req.params.firstName
    User.findOne({ firstName })
        // .select("-photo")
        .populate('friends', '_id firstName lastName')
        .select('_id firstName lastName photo friends')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: err
                })
            }
            res.json(data)

        })

}

exports.listFriendsofFriend = (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 5
    const firstName = req.params.firstName
    let originallist = req.body.friends
    const { _id, friends } = req.body
    User.find({ firstName: { $ne: firstName }, friends: { $in: friends } })
        .limit(limit)
        .select('_id firstName lastName')
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    error: 'Friends not found'
                })
            }
            originallist.map((fr, i) => (
                users.map((user, index) => {
                    if (user.firstName === fr.firstName) {
                        users.splice(index, 1)
                    }
                })
            ))
            res.json(users)
        })

}


exports.photo = (req, res) => {
    const firstName = req.params.firstName
    User.findOne({ firstName })
        .select('photo')
        .exec((err, user) => {

            if (err || !user) {
                return res.status(400).json({
                    error: err
                })
            }
            res.set('Content-Type', user.photo.contentType)
            return res.send(user.photo.data)
        })
}