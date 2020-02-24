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
| POST   | `/api/auth/register` | all users      | Takes in a JSON with username and password. Responds with user ID, username, and hashed password. |
| POST   | `/api/auth/login`    | all users      | Generates and returns a token that will be used for all future calls that require authentication. |
| DEL    | `/api/auth/:id`      | all users      | Deletes a user based on the user ID.                                                              |

#### Children Routes

| Method | Endpoint             | Access Control | Description                                                                                       |
| ------ | -------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| POST   | `/api/:id/new-child` | all users      | Takes in a JSON with users_id, name, age, and weight. Returns children_id                         |
| GET    | `/api/:id/children`  | all users      | Returns a response of all children objects based on user_id                                       |
| GET    | `/api/child/:id`     | all users      | Returns a response object of the child based on the children_id                                   |
| DEL    | `/api/child/:id`     | all users      | Deletes a child based on the child ID.                                                            |
| PUT    | `/api/child/:id`     | all users      | Updates a child based on the child ID.                                                            |

#### Entries Routes

| Method | Endpoint             | Access Control | Description                                                                                       |
| ------ | -------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| POST   | `/api/:id/new-entry` | all users      | Takes in a JSON of children_id, date, meal, food, category, and servings, and adds a new food entry to child by children id  |
| GET    | `/api/:id/entries`   | all users      | Returns a response of all entries based on children_id                                           |
| GET    | `/api/entry/:id`     | all users      | Returns a response of entry based on entry_id                                                    |
| DEL    | `/api/entry/:id`     | all users      | Deletes an entry based on the entry_id.                                                          |
| PUT    | `/api/entry/:id`     | all users      | Updates an entry based on the entry_id.                                                          |
