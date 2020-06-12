API: https://shitter-twit.herokuapp.com/

Calls
GET
/user
returns all users

/user/id
returns a specific user

/user/id/message
returns all messages of a specific user

/message
returns all messages

/message/id
returns a specific message

POST
/user/create
create user: name, email, password (hashed)

/user/verify
verify user / password (hash) and set token