# RUBIX TENNIS Authentication API

Base path: `/api/users/`

All endpoints accept and return JSON. Password-reset emails are sent using Django's email backend. In local development, the configured console backend prints the email to the server terminal. Configure Django's `EMAIL_BACKEND` and `SMTP_*` environment variables to deliver email through SMTP in a deployed environment.

## Sign up

`POST /api/users/register/`

Request:

```json
{
  "full_name": "Tennis Player",
  "email": "player@example.com",
  "password": "ChooseAStrongPassword!",
  "confirm_password": "ChooseAStrongPassword!",
  "phone_number": "+233200000000",
  "country": "GH"
}
```

`phone_number`, `country`, and `profile_photo` are optional. `profile_photo` can be submitted as a multipart upload.

Success (`201 Created`):

```json
{
  "user": {
    "id": 1,
    "full_name": "Tennis Player",
    "email": "player@example.com",
    "phone_number": "+233200000000",
    "country": "GH",
    "profile_photo": null
  },
  "refresh": "<refresh-token>",
  "access": "<access-token>"
}
```

Passwords must match and pass Django's configured password validators. Passwords and confirmation values are never returned.

## Log in

`POST /api/users/login/`

Request:

```json
{
  "email": "player@example.com",
  "password": "ChooseAStrongPassword!"
}
```

Success (`200 OK`):

```json
{
  "refresh": "<refresh-token>",
  "access": "<access-token>"
}
```

Invalid credentials return `401 Unauthorized`. Suspended accounts return `403 Forbidden`.

## Request a password reset

`POST /api/users/forgot-password/`

Request:

```json
{
  "email": "player@example.com"
}
```

Response (`200 OK`):

```json
{
  "message": "If an active account exists for that email, password reset instructions have been sent."
}
```

The same response is returned for unknown or inactive accounts. If an active account exists, Django sends an email containing a time-limited, single-use reset token. The link format is:

`<FRONTEND_URL>/reset-password/?uid=<user-id>&token=<token>`

The frontend should extract `uid` and `token` from that link and submit them with the new password. Set `FRONTEND_URL` in the environment to the frontend application's origin. If it is unset, the link points to the API reset endpoint.

## Reset a password

`POST /api/users/reset-password/`

Request:

```json
{
  "uid": 1,
  "token": "<token-from-email>",
  "new_password": "AnotherStrongPassword!"
}
```

Success (`200 OK`):

```json
{
  "message": "Password reset successful."
}
```

Invalid or expired tokens return `400 Bad Request`. New passwords must pass Django's configured password validators. A successful reset invalidates the reset link.

## Common errors

- `400 Bad Request`: missing or invalid fields, mismatched signup passwords, weak password, or invalid/expired reset token.
- `401 Unauthorized`: invalid login credentials.
- `403 Forbidden`: login attempted by a suspended account.

Validation errors are returned as JSON keyed by field name.
