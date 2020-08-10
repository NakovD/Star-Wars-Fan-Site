# Star Wars Fan Site

## Table of Contents
1. [Description](#description)
2. [Prerequisites](#prerequisites)
3. [Instalation](#installation)
4. [Routes](#routes)
5. [DATA format](#data-format)
6. [BackEnd API](#backend-api)

## Description
This project is a fan site for everyone who loves Star Wars. You can find a big collection of characters of all eras and factions, and also add new ones or edit old ones. In addition you can use the forum, where users can discuss different topics around the Star Wars universe. Games, movies, TV series, characters and actors, you can discuss everything Star Wars related in our forum. 

### Prerequisites
* run npm i react-router-dom for a frond end routing, more info [here](https://www.npmjs.com/package/react-router-dom);
* run npm i socket.io-client for a socket client service, more info [here](https://www.npmjs.com/package/socket.io-client);

### Installation
Download the code from github and after installing all the dependencies, then you can type:
```npm start``` in the terminal and the project should be started. In your browser type [http://localhost:3000](http://localhost:3000)
and you should see the main page with Luke Skywalker. The project can not work without the BackEnd API. More information about the API in [BackEnd API section](#backend-api).
The API is in the project repo in folder: BackEnd API.

### Routes
Route | Description | Limited
----- | ----------- | -------
/ | Home Page | All users
/characters | Characters page(all approved characters) | All users
/charDetails/:id | Details of a character | All users
/aboutMe | About me and contacts | All users
/login | Login page | Only guests
/register | Register Page | Only guests
/addCharacter | Add a new character | Registered only
/editChar/:idChar | Request an edit for existing character | Registered only
/forum | Forum Home page | Registered only
/createDiscussion | Create a new discussion |Registered only
/discussion/:discussionId | Details of a discussion | Registered only
/editDisc/:discId | Edit a discussion | Registered only; Only the creator of the current discussion
/thanksSucka | Message after submitting characters changes | Registered only
/profilePage/:userId | Profile page of a user | Registered only
/adminOnly/verify | Verify key so can access to admin login/register | Only guests
/adminOnly/login | Login page for admins | Only users that have provided the special key
/adminOnly/register | Register page for admins | Only users that have provided the special key
/adminOnly/characters | Characters page (all not approved characters) | Admins only
/adminOnly/charDetails/:idChar | Details of a chatacter | Admins only
/adminOnly/edit/:idChar | Check data for a character | Admins only

### DATA format: 

Character
>* name: character's name
>* factions: all factions that apply to that character
>* species: character's species
>* era: character's era
>* imgURL: link to a image of the character
>* description: character's description
>* _id: character's id

Discussion
>* title: discussion's title
>* description: discussion's description
>* creator: discussion's creator id
>* createdAt: time of creating the discussion
>* likes: number of the likes of the discussion
>* usersLiked: array of ids with the users that already liked the discussion
>* comments: number of the comments of the discussion
>* _id: the id of the discussion

Comment
>* commentContent: the text of the comment
>* creator: the id of the creator of the comment
>* creatorName: the name of the creator of the comment
>* discussion: the id of the discussion that this comment belongs to
>* _id: the id of the comment

### BackEnd API

The project can not work without the BackEnd API. The API is in the project repo in folder: StarWarsFanSiteServer. The docs of the API can be found [here](https://github.com/NakovD/Star-Wars-Fan-Site/blob/master/StarWarsFanSiteServer/README.md).










