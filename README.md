# Express YAWN

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://adamrobson.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adamrayrobson)

This is a backend application built with [Express](https://expressjs.com/) and [Postgres](https://www.postgresql.org/), that includes authentication and authorization and offers an alternative login using [GitHub](https://github.com) OAuth to sign in users.

## Table of Contents

- [Express YAWN](#express-yawn)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Features](#features)
  - [Scripts](#scripts)
  - [Run Locally](#run-locally)
  - [Routes](#routes)
    - [Users](#users)
    - [Restaurants](#restaurants)
    - [Github](#github)
  - [Technologies Used](#technologies-used)
  - [Authors](#authors)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## General Information

This project was built as part of my time in the July 2022 cohort at Alchemy Code Lab in Portland, Oregon.

## Features

This backend application uses Express to create a server and Postgres to create a database. It includes the functionality to Create Read Update and Delete books from the database.

## Scripts

| Command                | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | Starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | Runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | Runs the tests once                                                                 |
| `npm run test:watch`   | Continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | Sets up the database locally                                                        |
| `npm run setup-heroku` | Sets up the database on Heroku                                                      |

## Run Locally

1. Make sure you have node installed
2. Clone the repository to your local machine
3. Create a dotenv file just like the example, except with unique values for the variables
4. Ports 8080 & 5432

## Routes

### Users

`/api/v1/users/`            `POST`          Creates new user

`api/v1/users/sessions/`    `POST`          Signs in existing user

`/api/v1/users/me/`         `GET`           Returns current user
`/api/v1/users/`            `GET`           Authorized endpoint - returns all users for admin
`api/v1/users/sessions/`    `DELETE`        Deletes a user session

### Restaurants

`/restaurants`              `GET`           returns a list of restaurants
`/restaurants/:id`          `GET`           returns a specific restaurant
`/restaurants/:id/reviews`  `POST`          allows user to add reviews

### Github


`/api/v1/github/login`      `GET`       for redirecting to Github’s OAuth

`/api/v1/github/callback`   `GET`       callback URI for Github to redirect to after log in

`/api/v1/github`            `DELETE`    signs a user out (i.e. deletes the session cookie)


## Technologies Used

- JavaScript
- Express
- Babel
- Node
- Postgres
- Postman
- Jest
- Nodemon
- ESLint
- Prettier
- GitHub Actions

## Authors

> [@Adam-Robson](https://www.github.com/Adam-Robson)

## Acknowledgements

Thanks to Alchemy Code Lab and instructor [Julie Nisbet](https://www.github.com/julienisbet), who created the template for the project and was crucial in debugging along the way!

## Contact

Feel free to reach out! I can be messaged through LinkedIn by clicking on the badge above or by emailing me at adamray312@gmail.com.
