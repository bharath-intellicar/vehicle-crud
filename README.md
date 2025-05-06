# Vehicle API Documentation

This document outlines the available endpoints for vehicle management operations.

## Base URL
```
http://localhost:3000/api/v1
```

## Endpoints

### 1. Get All Vehicles

**Request:**
```http
GET /vehicles
```

**Response:**
```json
[
  {
    "vehicle_id": "integer",
    "vehicle_no": "string",
    "typeid": "integer",
    "created_at": "timestamp",
    "created_by": "integer",
    "uuid": "string"
  }
]
```

### 2. Get Vehicle by ID

**Request:**
```http
GET /vehicles/{id}
```

**Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer | Vehicle ID |

**Response:**
```json
{
  "vehicle_id": "integer",
  "vehicle_no": "string",
  "typeid": "integer",
  "created_at": "timestamp",
  "created_by": "integer",
  "uuid": "string"
}
```

### 3. Create Vehicle

**Request:**
```http
POST /vehicles
```

**Request Body:**
```json
{
  "vehicleno": "string",
  "typeid": "integer",
  "userid": "integer"
}
```

**Response:**
```json
{
  "code": "integer",
  "data": [
    {
      "id": "integer",
      "vehicleno": "string",
      "typeid": "integer",
      "createdat": "timestamp",
      "createdby": "integer",
      "uuidval": "string"
    }
  ],
  "message": "Vehicle created successfully"
}
```

### 4. Update Vehicle

**Request:**
```http
PUT /vehicles/{id}
```

**Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer | Vehicle ID |

**Request Body:**
```json
{
  "vehicleno": "string",
  "typeid": "integer",
  "userid": "integer"
}
```

**Response:**
```json
{
  "code": "integer",
  "data": [
    {
      "id": "integer",
      "vehicleno": "string",
      "typeid": "integer",
      "createdat": "timestamp",
      "createdby": "integer",
      "uuidval": "string"
    }
  ],
  "message": "Vehicle updated successfully"
}
```

### 5. Delete Vehicle

**Request:**
```http
DELETE /vehicles/{id}
```

**Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | integer | Vehicle ID |

**Response:**
```json
{
  "code": "integer",
  "data": [
    {
      "id": "integer",
      "vehicleno": "string",
      "typeid": "integer",
      "createdat": "timestamp",
      "createdby": "integer",
      "uuidval": "string"
    }
  ],
  "message": "Vehicle deleted successfully"
}
```
