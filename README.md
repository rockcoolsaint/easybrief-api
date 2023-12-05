# EasyBrief API Launch and setup

Execute the following commands setup the API.

- Clone the repo `git clone <github-url>`
- `cd` into the cloned directory
- run `npm install`
- create a .env file and paste the following into it
  ```
  CONNECTION_URL="mongodb_connection_string_without_the_quotes"
  SECRET="jwt_secret_salt_without_the quotes"
  ```
  you can setup mongodb locally or visit https://cloud.mongodb.com to create an online service
- run `npm start`

### Launch your Postman or other API testing tools

#### The folowing are the available endpoints

### Auth
- Sign in
  ```
    POST http://localhost:5000/user/signin 
    
    JSON body
    {
      "email": "email"
      "password" "password"
    }
  ```

- Sign up
  ```
    POST http://localhost:5000/user/signup 
    
    JSON body
    { 
      "firstName": '',
      "lastName": '',
      "email": '',
      "password": '',
      "confirmPassword": ''
    }
  ```
These endpoint generates a BEARER TOKEN. Ensure to pass it into the other other authenticated routes

### Post
- create Post
  ```
    POST http://localhost:5000/posts
    { "title": '', "message": '', "tags": '', "selectedFile": '' }
  ```
  take note that only the title and message field are required

- Fetch Posts
  ```
    GET http://localhost:5000/posts
  ```

- update Post
  ```
    PATCH http://localhost:5000/posts/:id
    { "title": '', "message": '', "tags": '', "selectedFile": '' }
  ```
  take note that only the title and message field are required

- delete Post
  ```
    delete http://localhost:5000/posts/:id
  ```
These all require the auth token in the header


### Please Note**: this setup is optimized for local development