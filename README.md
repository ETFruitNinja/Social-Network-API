# Social Network API

## Description

This is an app where users can post their thoughts and react to other user's thoughts.

Assistance on this assignment was obtained through AskBSC. I also used Stack Overflow for help on email validation (https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

N/A

## Usage

Open the repo in the command line and run 'npm start' to start the app in Insomnia.  The functions that are available for the user to use include:
- GET /api/users = get all users
- POST /api/users = create a new user
- GET /api/users/:userId = get a single user by id
- PUT /api/users/:userId = update a user's info by id
- DELETE /api/users/:userId = delete a user by id
- POST /api/users/:userId/friends = add a user to a user's friend list
- DELETE /api/users/:userId/friends/:friendId = remove a friend from a user's friend list (using friend id)
- GET /api/thoughts = get all thoughts
- POST /api/thoughts = create a new thought
- GET /api/thoughts/:thoughtId = get a single thought by id
- PUT /api/thoughts/:thoughtId = edit a thought by id
- DELETE /api/thoughts/:thoughtId = delete a thought by id
- POST /api/thoughts/:thoughtId/reactions = add a reaction to a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId = delete a reaction (using reaction id)

Tutorial video link: https://drive.google.com/file/d/1YXcc1QgxsB-Nc9FbfJdYMMc-oMJfdQVj/view

## License

N/A

## Contributing

N/A

## Tests

N/A

## Questions

GitHub Profile: github.com/ETFruitNinja

Email: jeffreyyehuw@gmail.com