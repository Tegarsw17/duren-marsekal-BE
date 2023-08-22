## Presensi User API

### Endpoint : POST /api/presensi/:userId

Headers :

```json
{
  // Admin or manager role
  "Authorization": "cde89262-3ddb-11ee-be56-0242ac120002"
}
```

Request Body :

```json
{
  "username": "bagusn",
  "password": "notalowed",
  // user role
  "unique_code": "e8ba9972-3e4f-11ee-be56-0242ac120002"
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
