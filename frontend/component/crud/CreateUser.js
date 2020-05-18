import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router';
import { createUser, listUserWithPagination } from '../../actions/user';

const CreateUser = ({ router }) => {


    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        firstName: '',
        lastName: '',
        hidePublishButton: false
    })
    const [friends, setFriends] = useState([])
    const [checked, setChecked] = useState([])
    const { error, sizeError, success, formData, firstName, lastName, hidePublishButton } = values
    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initUser()
    }, [router])

    const submitUser = (e) => {
        e.preventDefault()
        createUser(formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, firstName: '', lastName: '', error: '', success: `A new user is added` })
                setFriends([])
            }
        })
    }
    const initUser = () => {
        listUserWithPagination(0, 20).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setFriends(data)
            }
        })
    }
    const handleToggle = (c) => () => {
        setValues({ ...values, error: '' })

        //return the first index or -1
        const clickedTag = checked.indexOf(c)
        const all = [...checked]
        if (clickedTag === -1) {
            all.push(c)
        } else {
            all.splice(clickedTag, 1)
        }
        console.log(all)
        setChecked(all)
        formData.set('friends', all)
    }

    const showUser = () => {
        return (
            friends && friends.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.firstName}{' '}{c.lastName}</label>
                </li>
            ))
        )
    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value, formData, error: '' })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    )

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>{success}</div>
    )


    const createUserForm = () => {
        return (
            <form onSubmit={submitUser} >
                <div className="form-group">
                    <label className="text-muted">FirstName</label>
                    <input type="text" className="form-control" onChange={handleChange('firstName')} value={firstName} />
                </div>

                <div className="form-group">
                    <label className="text-muted">LastName</label>
                    <input type="text" className="form-control" onChange={handleChange('lastName')} value={lastName} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form >
        )
    }


    return <div className="container-fluid pb-5">

        <div className="row">
            <div className="col-md-8">
                {createUserForm()}
                <div className="pt-3">
                    {showError()}
                    {showSuccess()}
                </div>

                <hr />
            </div>

            <div className="col-md-4">
                <div>
                    <div className="form-group pb-2">
                        <h5>Avatar Image</h5>
                        <hr />
                        <small className="text-muted pr-4">Max Size:1mb</small>
                        <label className="btn btn-outline-info">Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')} hidden /></label>
                    </div>
                </div>
                <div>
                    <h5>Other Users you may know.</h5>
                    <hr />
                    <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showUser()}</ul>
                </div>

            </div>
        </div>


    </div>
}

export default withRouter(CreateUser);