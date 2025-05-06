**Vehicle CRUD**
GET http://localhost:3000/api/v1/vehicles
Inputs:
Outputs:
{
    "vehicle_id",
    "vehicle_no",
    "typeid",
    "created_at",
    "created_by",
    "uuid"
}

GET http://localhost:3000/api/v1/vehicles/{id}
Inputs: id in param
Outputs:
{
    "vehicle_id",
    "vehicle_no",
    "typeid",
    "created_at",
    "created_by",
    "uuid"
}

POST http://localhost:3000/api/v1/vehicles
Inputs:
{
	"vehicleno", 
    "typeid", 
    "userid"
}
Outputs:
{
    "code",
    "data": [
        {
            "id",
            "vehicleno",
            "typeid",
            "createdat",
            "createdby",
            "uuidval"
        }
    ],
    "message": "Vehicle created successfully"
}

PUT http://localhost:3000/api/v1/vehicles/{id}
Inputs:
{
	"vehicleno", 
    "typeid", 
    "userid"
}
Outputs:
{
    "code",
    "data": [
        {
            "id",
            "vehicleno",
            "typeid",
            "createdat",
            "createdby",
            "uuidval"
        }
    ],
    "message": "Vehicle updated successfully"
}

DELETE http://localhost:3000/api/v1/vehicles/{id}
Inputs:
Outputs:
{
    "code",
    "data": [
        {
            "id",
            "vehicleno",
            "typeid",
            "createdat",
            "createdby",
            "uuidval"
        }
    ],
    "message": "Vehicle deleted successfully"
}