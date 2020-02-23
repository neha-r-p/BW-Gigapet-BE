# Gigapet BE

## The backend is deployed at: https://gigapets-be.herokuapp.com/
## If running locally: http://localhost:5000/

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server

## Endpoints

#### Auth Routes

| Method | Endpoint             | Access Control | Description                                                                                       |
| ------ | -------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| POST   | `/api/auth/register` | all users      | Takes in a JSON with username and password. Responds with user ID, username, and hashed password.     |
| POST   | `/api/auth/login`    | all users      | Generates and returns a token that will be used for all future calls that require authentication. |


- DEL (delete user by id): /api/auth/:id 
- POST (add a new child): /api/:id/new-kid
- GET (retrieve a list of children): /api/:id/kids
- DEL (delete kid by id): /api/kid/:id
- PUT (update a kid by id): /api/kid/:id
- POST (add a new food entry to kid by kids id): 
	/api/:id/new-entry
- GET (get food entries by kids id): /api/:id/entries
- GET (entry by entry id): /api/entry/:id
- DEL (delete entry by id): /api/entry/:id
- PUT (update an entry by entry id): /api/entry/:id