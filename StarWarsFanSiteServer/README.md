### API Prerequisites
* run npm i express for express framework, more info [here](https://www.npmjs.com/package/express);
* run npm i mongoose for mongoose tool, more info [here](https://www.npmjs.com/package/mongoose);
* run npm i cookie-parser for cookies, more info [here](https://www.npmjs.com/package/cookie-parser);
* run npm i jsonwebtoken for json web token, more info [here](https://www.npmjs.com/package/jsonwebtoken);
* run npm i bcrypt for bcrypt, more info [here](https://www.npmjs.com/package/bcrypt);
* run npm i cors for cors middleware, more info [here](https://www.npmjs.com/package/cors);
* run npm i socket.io for socket server service, more info [here](https://www.npmjs.com/package/socket.io);
* run npm i dotenv for dotenv, more info [here](https://www.npmjs.com/package/dotenv);

### API Installation
After downloading the API code from github and installing all of the dependencies, create a .env file and inside put 4 variables like this:
NODE_ENV='here you put the environment variable; default is development'<br/>PORT='the port on which the API is gonna run'<br/>
PRIVATE_KEY='here you put a private key which is used for validating the jwt tokens and also is the key that verifies the admins'<br/>
DB_URL='the url to the db that is gonna be used(I use Atlas MongoDB cloud)'<br/>
Then type ```npm start``` in the terminal and the server should start listening on port 3001. Two messages should appear: 
DB is up and running! and Server is up and running on port:3001! If they appear then the server is running successfully.

### API Endpoints
**Character:**<br/>
**Get a specific character details by id**<br/>
method: **GET**<br/>
endpoint: /api/character/:id<br/>
response(status code: 200): 
```
{ 
  name: String,
  factions: String,
  species: String,
  era: String,
  imgURL: String
  description: String,
  _id: ObjectId
}
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Get all approved characters**<br/>
method: **GET**<br/>
endpoint: /api/characters<br/>
response(status code: 200): 
```
[
  { 
    name: String,
    factions: String,
    species: String,
    era: String,
    imgURL: String
    description: String,
    _id: ObjectId
  }
] array of all approved chars
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Create a new character, which is not approved**<br/>
method: **POST**<br/>
endpoint: /api/createChar<br/>
response(status code: 201): 
```
{
  message: 'Character saved successfully in DB!'
}
```
if error occured(status code 400), response should look like:
```
 {
  message: error message
 } 
```
**Approve a character(this method should not create a new character)**<br/>
method: **POST**<br/>
endpoint: /api/approveChar<br/>
response(status code: 201): 
```
{
  message: 'Character saved successfilly in DB!'
}
```
if error occured(status code 400), response should look like:
```
 {
  message: error message
 } 
```
**Get all not approved characters**<br/>
method: **GET**<br/>
endpoint: /api/characters/adminOnly<br/>
response(status code: 200): 
```
[
  { 
    name: String,
    factions: String,
    species: String,
    era: String,
    imgURL: String
    description: String,
    _id: ObjectId
  }
] array of not approved characters
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Get details of a not approved character**<br/>
method: **GET**<br/>
endpoint: /api/character/adminOnly/:id<br/>
response(status code: 200): 
```
 { 
    name: String,
    factions: String,
    species: String,
    era: String,
    imgURL: String
    description: String,
    _id: ObjectId
}
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Delete a single character(dissaprove)**<br/>
method: **DELETE**<br/>
endpoint: /api/disapproveChar<br/>
response(status code: 200): 
```
{ 
    message: 'Char deleted successfully!'
}
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Get a single discussion details**<br/>
method: **GET**<br/>
endpoint: /api/post/:id<br/>
response(status code: 200): 
```
{ 
  title: String,
  description: String,
  createdAt: String/Date,
  creator: Object with data of the creator,
  likes: Number
  comments: Number
  usersLiked: Array of ObjectIds(users that have liked the discussion)
  _id: ObjectId
}
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```
**Get all created discussions**<br/>
method: **GET**<br/>
endpoint: /api/posts<br/>
response(status code: 200): 
```
[
  { 
    title: String,
    description: String,
    createdAt: String/Date,
    creator: Object with data of the creator,
    likes: Number
    comments: Number
    usersLiked: Array of ObjectIds(users that have liked the discussion)
    _id: ObjectId
  }
] arrays of posts
```
if error occured(status code 500), response should look like:
```
 {
  message: error message
 } 
```