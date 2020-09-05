# Building Micro Frontend API

## API

List of available API

| API | method | description |
| ----------- | ---- | --- |
| `/login`    | POST | Returns a token if correct "username" and "password" are provided |
| `/validate` | POST | Returns 200 if token is valid |
| `/songs`    | GET  | Return list of songs for authenticated user|

### Login API

Example:
```bash
curl -X POST -d '{"username":"alan.turing","password":"1954"}' https://buildingmfe.maxgallo.io/api/login
```

Success Response (200)
```json
{                                                                                                                                                                                                                               │
  "status": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsIn..."
  }
}
```

Error Response (401)
```json
{
  "status": "fail",
  "data": {
    "message": "I wasn't able to find credentials in the body"
  }
}
```

### Validate API

Example
```bash
curl -X POST -H 'Authorization: Bearer TOKEN_GOES_HERE' https://buildingmfe.maxgallo.io/api/validate
```

Success Response (200)
```json
{
  "status": "success",
  "data": {}
}
```

Fail Response (401)
```json
{                                                                                                                                                                                                                               │
  "status": "fail",
  "data": {
    "message": "JWT token is not valid"
  }
}
```

### Songs API
Example
```bash
curl -H 'Authorization: Bearer TOKEN_GOES_HERE' https://buildingmfe.maxgallo.io/api/songs
```

Success Response (200)
```json
{
    "status": "success",
    "data": {
        "songs": [
            {
                "artistName": "Peter Gabriel",
                "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/e8/96/7f/e8967ffe-2f8a-ab0b-f446-96ef8800379e/source/100x100bb.jpg",
                "collectionName": "Scratch My Back (Special Edition)",
                "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/Music3/v4/0a/d5/7a/0ad57a82-557e-5294-283b-454f80baf8af/mzaf_9087288924317663215.plus.aac.p.m4a",
                "trackName": "My Body Is a Cage"
            },
            {...},
        ]
    }
}
```

Fail Response (401)
```json
{
  "status": "fail",
  "data": {
    "message": "JWT token is not valid"
  }
}
```

## Development

### First Time

Install lambda dependencies
```bash
cd lambda
npm install
```

Init terraform
```bash
cd terraform
terraform init
```

## Deploy

After changing some code in lambda
```bash
./zip.sh
cd terraform
terraform apply
```
