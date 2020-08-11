# Star Wars Fan Site

## Table of Contents
1. [Description](#description)
2. [Prerequisites](#prerequisites)
3. [Instalation](#installation)
4. [Routes](#routes)
5. [DATA format](#data-format)
6. [BackEnd API](#backend-api)
7. [Usage](#usage)

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

### Usage

#### Guest pages
**Home page** 
route: '/';
Stateless page with some welcoming text.<br/>
**Character's page** 
route: '/characters';
On this page you can see all the characters that are approved from an admin and their data is 90-100% correct. One single function make a GET request to the database and gets all characters.<br/>
**Note!** The characters are displayed in groups of 6. In the bottom of the page there is a buttons which help to navigate to other pages with characters(again separated in groups of 6).<br/>
**Single character details page**
route: '/charDetails/:id'
Here you can see the details of a single character. Simple GET request which gets the data from the DB.<br/>
**Note!** If the user is a guest he cannot try to edit the character. Requesting and edit for a character that already exists in site is restricted to only registered and logged users.<br/>
**About me page** 
route: '/aboutMe';
Just a stateless page with only HTML. Contains some data about me, what I like to do and about the site.<br/>
**Register page** 
route: '/register';
On this page users can register. They have to provide a password(at least 6 symbols),profileName and choose their side(it CAN be changed later) OR they can use their facebook to register and use the site.<br/>
**Note!** After successfully registering, users are automatically logged in.<br/>
**Login page** 
route: '/login';
Registered users can login here with their password and username. Or they can enter the site with Facebook.<br/>
**Note!** If users aren't registered and click on continue with FB on this page, they will be registered automatically.<br/>
#### Registered pages
**Character's page** 
route: '/characters'
Same as guest character's page.<br/>
**Note!** Authenticated users can also search for a character or factions in this page.<br/>
**Single character details page**
route: '/charDetails/:id'
Same as the guest Single character details page, but it includes button, used for editing the character.<br/>
**Edit a character page**
route: '/editChar/:idChar'
This page makes a GET request to the DB, gets the data of the character and displays it in the form.
When the user applies the changes, the changed data is sent to the DB and saved in different collection and will be reviewed later. The required fields are:
Name
Factions
Era
Species
imgURL
description<br/>
**Add character page**
route: '/addCharacter'
On this page the user can fill the form with the data of the new character and send it to the DB. The character won't appear in the character's page, cause it should be reviewed by an admin for approval. The form won't send if there are any empty fields. The required fields are:
Name
Factions
Era
Species
imgURL
description<br/>
**Forum page**
route: '/forum'
This page displays all created discussion in a table. They can also be sorted by likes, by comments or by date(the newest ones will be on top).<br/>
**Create discussion page**
route: '/createDiscussion'
On this page the user can create a new discussion. The required fields are: 
Title(minimal length is 5 characters).
Description(minimal length is 20 characters).
After successfully creating a new discussion the user is redirected to the forum page. Every discussion automatically gets the current time and the user id and adds them as properties. New discussions don't need to be reviewed. They are immediately displayed in the forum. <br/>
**Discussion page**
route: '/discussion/:discussionId'
On this page the user can see the details of a discussion he clicked. It shows the discussion content, some data about the user: his profile pic, rank and also side(the color around the discussion can tell the side of the user. If its blue - light side, if its red - dark side). The name of the user leads to his profile page.Under the discussion is the comment section. Comments are displayed by 10 on a page and under them is the place where users can add new comment or navigate to another page of comments. Also there is a like button on every discussion. Once clicked it dissapears cause users can like a discussion only one time. Every comment has the name of the user, that posted it. If clicked this name leads to the profile page of the user.<br/>
**Edit discussion page**
route: '/editDisc/:discId'
This page allows users to edit their discussions. Only the creator of the discussion can edit it. The button for editing a discussion appears only to their creator under the discussion on the discussion page and above the comment section. When clicked this button leads to a page where the user can edit the title or the description. Changes are applied immediately. Next to the edit button there is a delete button which deletes the discussion immediately, without asking. :D<br/>
**Thanks page**
route: '/thanksSucka'
Static page without any functionality. It show a text after creating a new character or updating an old one.It also has a link tag to character's page.<br/>
**Profile page**
route: '/profilePage/:userId'
This page gets the data of the user and displays it. It shows his rank, side, profile picture and the 3 most commented discussions. If the user is on his own profle page, he can change his side and change his profile picture. Changes are applied immediately.<br/>
**Note!** Users can't change to side, they are already. For example: if user is dark side, he can't change to dark side. Notification is showed.<br/>



