import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createUser = (user) => {
    return fetch(`${API}/api/user/addNewUser`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: user
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const listUserWithPagination = (skip, limit) => {
    const data = {
        limit, skip
    }
    return fetch(`${API}/api/user/allUsers`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const singleUser = firstName => {
    return fetch(`${API}/api/user/${firstName}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const listRelated = (user) => {
    console.log("client", user)
    const payload = {
        _id: user._id,
        friends: user.friends
    }
    return fetch(`${API}/api/user/fof/${user.firstName}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(payload)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};