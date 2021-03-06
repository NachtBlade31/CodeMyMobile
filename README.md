# Friend App
Know your Friend and  make new friends.

## Table of Content
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [API](#api)
* [PostMan Testing](#postman-testing)
* [Database Schema](#database-schema)
* [Testing](#testing)

## General info
The goal was to create Rest APIs and a SPA to run those APIs.

## Technologies
Project is created with:
* NodeJS: 12.13.1
* MongoDB: 4.2.6
* ExpressJS: 4.17.1
* NextJS: 9.4.1
* ReactJS: 16.13.1

## Setup
To run this project, install it locally using npm:

```
$ cd frontend
$ npm install
$ cd ..
$ cd backend
$ npm install
$ npm run dev

```
The Application will be running on http://localhost:3000/

## Features 

* A new User can be added at will. The fields include First Name, Last Name and Avatar.The user needs to pick atleast one friend.
* A progress bar is added to each page to show thw progess and let user know that something is happening.
* When a User A adds User B as a friend, the same is also reflected in the profile of user B which will show User A as his friend.
* Basic pagination is added. At one time only 5 users are shown on frontPage, we can get more profiles using Load More buton.
* Any user have the ability to see friends of his friends which are not mutual to them.



## API

There are total 7 API endpoints to get data.

* Landing Page

```
@@Method: Get 
@@Route:  http://localhost:5000/api/user
@@Use:    Opens the default page
```

* Route for adding new users

```
@@Method: Post 
@@Route:  http://localhost:5000/api/user/addNewUser
@@Use:    Adds a news User.
@@Params: Expects form Data, with 4 fields. firstName, secondName, photo(which is a file) and friends which is the objectId of he other users.

```

* Route for getting Single user Data

```
@@Method: get 
@@Route:  http://localhost:5000/api/user/:firstName
@@Use:    Returns details of the particular user.
@@Params: Expects firstName as paramter to query the user. For example-http://localhost:5000/api/user/Thor will fetch result for user with firstName Thor

```

* Route to get Users data as per as per Pagination limit

```
@@Method: Post 
@@Route:  http://localhost:5000/api/user/allUsers
@@Use:    Returns details of the all the user as per equired limit .
@@Params: Expects 2 variables , skip and limit. Limit is the maximum number of user to be returned and skip is number of users to be skipped

```

* Route to get list of friends

```
@@Method: get 
@@Route:  http://localhost:5000/api/user/friends/:firstName
@@Use:    Returns details of all the friends of particular user.
@@Params: Expects firstName as paramter to query the user. For example-http://localhost:5000/api/user/friends/Thor will fetch result for user with firstName Thor and return all his friends.

```

* Route to get list of friends of the friends

```
@@Method: Post 
@@Route:  http://localhost:5000/api/user/fof/:firstName
@@Use:    Returns details of all the users who are not mutual friends with friend of a particular user.
@@Params: Expects firstName as paramter to query the user and 3 variables, the id of the user and array of friends of the user. For example-http://localhost:5000/api/user/fof/Thor will fetch result for user with firstName Thor and return all friends of Thor.

```

* Route to get photo of user

```
@@Method: Get 
@@Route:  http://localhost:5000/api/user/photo/:firstName
@@Use:    Returns avatar photo of particular user
@@Params: Expects firstName as paramter to query the user. For example-http://localhost:5000/api/user/photo/Thor will fetch result for user with firstName Thor and return hi avatar pic.

```

## Postman Testing

* Fetch User Info

![GetUserInfo](Images/GetUserInfo.png)


* Add New User

![AddNewUser](Images/AddNewUser.png)


* Get Friend Of Friend

![FriendOfFriend](Images/FriendOfFriend.png)


* Add All User with basic Pagination

![GetAllUserWithPagination](Images/GetAllUserWithPagination.png)


* Add Profile Avatar

![GetUserAvatar](Images/GetUserAvatar.png)


* Add all friends of particular user

![GetAllFriends](Images/GetAllFriends.png)


# Database Schema

We are using MongoDb Atlas  as the database. The database is deployed on cloud and data can be added and retreived directly from cloud. There is no changes requird for any database and can be used from anywhere.
The Schema includes 4 fields.

```

 firstName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    friends: [{ type: ObjectId, ref: 'User', required: true }]
    
```

## Testing

Code is yet to be tested . But the following are the proposed methods for testing.

* For Backend - Use of Mongo-unit and Mocha is proposed for intergration and unit testing.
  Following Links can be referred for the same.
  
  [Mocha Testing](https://blog.bitsrc.io/build-a-unit-testing-suite-with-mocha-and-mongoose-eba06c3b3625)
  

* For Frontend-Use of Frameworks like  Jest and Enzyme is proposed for unit testing NextJs frontend.
  Following Links can be referred for the same.
  
  [Jest and Enzyme Unit Testing](https://medium.com/@miiny/unit-test-next-js-with-jest-and-enzyme-5b305a8e29fe)

  
