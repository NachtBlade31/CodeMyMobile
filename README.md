# Friend App
Know your Friend and  make new friends.

## Table of Content
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [API](#api)
* [Database Schema](#database-schema)
* [Testing](#testing)

## General info
This is a sample app for round 2 for CodeMyMobile interview.The goal was to create Rest APIs and a SPA to run those APIs.

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

## Features 

* A new User can be added at will. The fields include First Name, Last Name and Avatar.The user needs to pick atleast one friend.
* A progress bar is added to each page to show thw progess and let user know that something is happening.
* When a User A adds User B as a friend, the same is also reflected in the profile of user B which will show User A as his friend.
* Basic pagination is added. At one time only 5 users are shown on frontPage, we can get more profiles using Load More buton.
* Any user have the ability to see friends of his friends who are not mutual to them.



# API

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
