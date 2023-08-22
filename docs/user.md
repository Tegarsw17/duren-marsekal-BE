# USER API SPEC

## Register User API

### Endpoint: POST /api/user

Headers :

```json
{
  "Authorization": "tegar satriya"
}
```

Request Body :

```json
{
  "name": "Bagus Najmudin",
  "username": "bagusn",
  "email": "bnajmudin@mail.com",
  "password": "notalowed",
  "phone": "081234583",
  "city_former": "tidore",
  "join_date": "21-07-2022"
}
```

Response Body Success :

```json
code : 200
{
  "data": {
    "name": "Bagus Najmudin",
    "username": "bagusn",
    "email": "bnajmudin@mail.com",
    "phone": "081234583",
    "city_former": "tidore",
    "join_date": "21-07-2022",
    "role_id": 2,
    "photo": "default.png",
    "salary": 0
  }
}
```

Response Body Error :

```json
code: 400
{
  "errors": "Username already registered"
}
```

## Login User API

### Endpoint : POST /api/user/login

Request Body :

```json
{
  "username": "bagusn",
  "password": "notalowed"
}
```

Response Body Success :

```json
code : 200
{
  "data": {
    "token": "cde89262-3ddb-11ee-be56-0242ac120002",
  }
}
```

Response Body Error :

```json
code: 400
{
  "errors": "username or password is wrong"
}
```

## Get Current User API

### Endpoint : GET /api/user/current

Headers :

```json
{
  "Authorization": "cde89262-3ddb-11ee-be56-0242ac120002"
}
```

Response Body Success :

```json
code : 200
{
  "data": {
    "name": "Bagus Najmudin",
    "username": "bagusn",
    "email": "bnajmudin@mail.com",
    "phone": "081234583",
    "city_former": "tidore",
    "join_date": "21-07-2022",
    "role_id": 2,
    "photo": "default.png",
    "salary": 0,
    "unique_code": "e8ba9972-3e4f-11ee-be56-0242ac120002"
  }
}
```

Response Body Error :

```json
code: 404
{
  "errors": "username not found"
}
```
