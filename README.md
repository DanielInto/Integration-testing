# Hex to RGB API

## GET /api/hex-to-rgb

### Query Parameters
- `hex` : Hex color string (3- or 6-digit, with or without #)

### Responses
- 200 OK
```json
{ "hex": "ff0000", "rgb": { "r":255,"g":0,"b":0 } }
