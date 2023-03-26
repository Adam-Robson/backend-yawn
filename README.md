# express-yawn

## scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |

## user routes

`/api/v1/users/`            `POST`          `{email: 'example@test.com',    Creates new user
                                              password: '123456',
                                              firstName: 'Test',
                                              lastName: 'User'}`

`api/v1/users/sessions/`    `POST`          `{email: 'example@test.com',    Signs in existing user
                                              password: '123456'}`
`/api/v1/users/me/`         `GET`           None                            Returns current user
`/api/v1/users/`            `GET`           None                            Authorized endpoint - returns all users for admin. |
`api/v1/users/sessions/`    `DELETE`        None                            Deletes a user session

## restaurants routes

`/restaurants`              `GET`           `.getAll`                       returns a list of restaurants
`/restaurants/:id`          `GET`           `getById`                       returns a specific restaurant
`/restaurants/:id/reviews`  `POST`          `insert`                        allows user to add reviews

### how to configure

1. make sure you have node installed
2. clone the repository to your local machine
3. create a dotenv file just like the example, except with your own values for the variables
4. run the scripts in this order | npm run setup-db | npm run start:watch | npm run test:watch
5. ports 8080 5432
