# Star Wars Fan Site

## Table of Contents
1. [Description](#description)
2. [Prerequisites](#prerequisites)
3. [Instalation](#installation)
4. [Routes](#routes)

## Description
This project is a fan site for everyone who loves Star Wars. You can find a big collection of characters of all eras and factions, and also add new ones or edit old ones. In addition you can use the forum, where users can discuss different topics around the Star Wars universe. Games, movies, TV series, characters and actors, you can discuss everything Star Wars related in our forum. 

### Prerequisites
* run npm i react-router-dom for a frond end routing, more info [here](https://www.npmjs.com/package/react-router-dom);
* run npm i socket.io for a socket service, more info [here](https://www.npmjs.com/package/socket.io);

### Installation
Download the code from github and after installing all the dependencies, then you can type:
```npm start``` in the terminal and the project should be started. In your browser type [http://localhost:3000](http://localhost:3000)
and you should see the main page with Luke Skywalker.

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
