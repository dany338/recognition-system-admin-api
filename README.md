<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Recognition system admin api

1. Clonar proyecto
2. ```npm i```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
npm run start:dev
```
## 🆕 Development

### Documentación hecha en swagger

```shell
http://localhost:3000/api
``` 

### Documentación hecha en postman

[postman](https://documenter.getpostman.com/view/1864602/2sA3BgAFhQ)

### Clonar la tarea

```shell
localhost:3000/api/tasks/clone/:id number
```
# ENDPOINTS

### POST: localhost:3000/api/tasks - crear la tarea

```json
{
  "task_key": "exampleTaskKey - Daniel test",
  "name": "Example Task Name - Daniel test",
  "client_config_id": 4,
  "description": "This is an example description of the task. - Daniel test",
  "required_score": 85,
  "run_type": "exampleRunType - Daniel test",
  "tasksrules": [
    {
      "rule_id": 61,
      "taskruleparameters": [
        {
          "rule_parameter_id": 76,
          "value": "Parameter Value 1 - Daniel test"
        },
        {
          "rule_parameter_id": 76,
          "value": "Parameter Value 2 - Daniel test"
        }
      ]
    },
    {
      "rule_id": 61,
      "taskruleparameters": [
        {
          "rule_parameter_id": 76,
          "value": "Parameter Value 3 - Daniel test"
        }
      ]
    }
  ]
}
```

### POST: localhost:3000/api/rules - crear la regla

```json
{
  "name": "Regla de Ejemplo - Daniel test",
  "version": "1.0 - Daniel test",
  "description": "Esta es una descripción de ejemplo de la regla. - Daniel test",
  "function_name": "funcionEjemplo - Daniel test",
  "weight": 10,
  "rulesmodels": [
    {
      "model_id": 20
    }
  ],
  "rulesparameters": [
    {
      "key": "parametroEjemplo - Daniel test",
      "format": "string - Daniel test",
      "input_validator": "validatorEjemplo - Daniel test"
    }
  ],
  "ruleoutputs": [
    {
      "type": "tipoEjemplo - Daniel test",
      "key": "claveEjemplo - Daniel test",
      "label": "EtiquetaEjemplo - Daniel test"
    }
  ]
}
```

### GET: localhost:3000/api/tasks?id=4 - Export all tasks by limit or by id

- response
```json
[
    {
        "task_id": 4,
        "task_key": "38e232c9-06cf-417c-98b7-3c2d10de4120",
        "name": "Descontaminar neveras",
        "client_config_id": 1,
        "description": "Descontaminar neveras con vacios o contaminantes",
        "required_score": 1,
        "run_type": "realtime",
        "created_at": "2024-02-28T03:59:36.678Z",
        "updated_at": "2024-02-28T03:59:36.678Z",
        "client_config": {
            "default_bucket": "postobon-0a4g8yd",
            "client": {
                "client_id": 2,
                "client_uid": "6c0b4111-da03-4d93-b90c-12e6210e0951",
                "name": "Postobon"
            },
            "clientMetadataSchema": {
                "client_metadata_schema_id": 1,
                "normalized_key": "example_normalized_key - Daniel test",
                "required": true,
                "validation": false,
                "validator_id": 1234,
                "type_value": "string - Daniel test",
                "key": "example_key - Daniel test",
                "label": "Example Label - Daniel test"
            }
        },
        "tasksrules": [
            {
                "task_rule_id": 48,
                "taskruleparameters": [
                    {
                        "task_rule_parameter_id": 41,
                        "rule_parameter_id": 46,
                        "value": "3"
                    },
                    {
                        "task_rule_parameter_id": 40,
                        "rule_parameter_id": 45,
                        "value": "['Pepsi','Gatorade','Colombiana','Hit','CanadaDry','Cristal','Hatsu','Speed Max','Cielo','Bretania','Hipinto','Tutti Frutti','Tropi Kola','Cristalina','Peak','Postobon','Acqua','Mr  Tea','Squash','Popular','Sporade','7Up','H2O','Natu Malta','Heineken','Andina','Miller','TKT']"
                    }
                ],
                "rule": {
                    "rule_id": 49,
                    "name": "Cantidad de productos foco minima",
                    "version": "1",
                    "description": "Cumple con cantidad de productos foco minima.",
                    "function_name": "qty_products_min",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 17,
                "taskruleparameters": [
                    {
                        "task_rule_parameter_id": 42,
                        "rule_parameter_id": 47,
                        "value": "['Pepsi','Gatorade','Colombiana','Hit','CanadaDry','Cristal','Hatsu','Speed Max','Cielo','Bretania','Hipinto','Tutti Frutti','Tropi Kola','Cristalina','Peak','Postobon','Acqua','Mr  Tea','Squash','Popular','Sporade','7Up','H2O','Natu Malta','Heineken','Andina','Miller','TKT']"
                    },
                    {
                        "task_rule_parameter_id": 43,
                        "rule_parameter_id": 48,
                        "value": "['Cerveza Heineken Central Cervecera - Original Botella Vidrio 250ml V1 - -','Cerveza Heineken Central Cervecera - Original Botella Vidrio 330ml V1 - -','Cerveza Heineken Central Cervecera - Original Lata - 269ml V1 - -','Cerveza Heineken Central Cervecera - Original Lata - 330ml V1 - -','Cerveza TKT Central Cervecera - Original Botella Retornable 330ml V1 - -','Cerveza TKT Central Cervecera - Original Lata - 330ml V1 - -','Cerveza Sol Central Cervecera - Original Botella Vidrio 330ml V1 - -','Cerveza Sol Central Cervecera - Original Botella Vidrio 250ml V1 - -','Cerveza Sol Central Cervecera - Original Lata - 269ml V1 - -','Cerveza Andina Central Cervecera - Original Botella Retornable 330ml V2 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 330ml V1 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 250ml V2 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 250ml V1 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 330ml V2 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 330ml V1 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 250ml V2 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 250ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 269ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 269ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 476ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 476ml V1 - - ','Cerveza Andina Central Cervecera - light lata - 330ml V2 - - ','Cerveza Andina Central Cervecera - light lata - 330ml V1 - - ','Cerveza Miller Central Cervecera - Lite Botella vidrio 330ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V2 X6 -','Cerveza Andina Central Cervecera - Light lata - 269ml V2 X6 - ','Cerveza TKT Central Cervecera - Original Lata - 330ml V1 X6 -','Cerveza Sol Central Cervecera - Original Lata - 269ml V1 X6 -','Cerveza Andina Central Cervecera - Original lata 269ml V2 X6 -']"
                    }
                ],
                "rule": {
                    "rule_id": 15,
                    "name": "Productos competencia veredicto",
                    "version": "1",
                    "description": "valida si se cumple la regla, no productos competencias no vacios",
                    "function_name": "check_competence_veredict",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 20,
                "taskruleparameters": [],
                "rule": {
                    "rule_id": 17,
                    "name": "Reconoce contaminacion competencia",
                    "version": "1",
                    "description": "Reconoce productos competencia ",
                    "function_name": "check_competence",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 18,
                "taskruleparameters": [],
                "rule": {
                    "rule_id": 16,
                    "name": "Reconoce espacios vacios",
                    "version": "1",
                    "description": "Reconoce slots vacioes",
                    "function_name": "check_empty_slots",
                    "weight": 1
                }
            }
        ]
    }
]
```

### POST: localhost:3000/api/tasks/import - Import all tasks by json body

- body
```json
[
    {
        "task_id": 4,
        "task_key": "38e232c9-06cf-417c-98b7-3c2d10de4120",
        "name": "Descontaminar neveras - imported by daniel test",
        "client_config_id": 1,
        "description": "Descontaminar neveras con vacios o contaminantes - imported by daniel test",
        "required_score": 1,
        "run_type": "realtime",
        "created_at": "2024-02-28T03:59:36.678Z",
        "updated_at": "2024-02-28T03:59:36.678Z",
        "client_config": {
            "default_bucket": "postobon-0a4g8yd",
            "client": {
                "client_id": 2,
                "client_uid": "6c0b4111-da03-4d93-b90c-12e6210e0951",
                "name": "Postobon"
            },
            "clientMetadataSchema": {
                "client_metadata_schema_id": 1,
                "normalized_key": "example_normalized_key - Daniel test",
                "required": true,
                "validation": false,
                "validator_id": 1234,
                "type_value": "string - Daniel test",
                "key": "example_key - Daniel test",
                "label": "Example Label - Daniel test"
            }
        },
        "tasksrules": [
            {
                "task_rule_id": 48,
                "taskruleparameters": [
                    {
                        "task_rule_parameter_id": 41,
                        "rule_parameter_id": 46,
                        "value": "3"
                    },
                    {
                        "task_rule_parameter_id": 40,
                        "rule_parameter_id": 45,
                        "value": "['Pepsi','Gatorade','Colombiana','Hit','CanadaDry','Cristal','Hatsu','Speed Max','Cielo','Bretania','Hipinto','Tutti Frutti','Tropi Kola','Cristalina','Peak','Postobon','Acqua','Mr  Tea','Squash','Popular','Sporade','7Up','H2O','Natu Malta','Heineken','Andina','Miller','TKT']"
                    }
                ],
                "rule": {
                    "rule_id": 49,
                    "name": "Cantidad de productos foco minima",
                    "version": "1",
                    "description": "Cumple con cantidad de productos foco minima.",
                    "function_name": "qty_products_min",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 17,
                "taskruleparameters": [
                    {
                        "task_rule_parameter_id": 42,
                        "rule_parameter_id": 47,
                        "value": "['Pepsi','Gatorade','Colombiana','Hit','CanadaDry','Cristal','Hatsu','Speed Max','Cielo','Bretania','Hipinto','Tutti Frutti','Tropi Kola','Cristalina','Peak','Postobon','Acqua','Mr  Tea','Squash','Popular','Sporade','7Up','H2O','Natu Malta','Heineken','Andina','Miller','TKT']"
                    },
                    {
                        "task_rule_parameter_id": 43,
                        "rule_parameter_id": 48,
                        "value": "['Cerveza Heineken Central Cervecera - Original Botella Vidrio 250ml V1 - -','Cerveza Heineken Central Cervecera - Original Botella Vidrio 330ml V1 - -','Cerveza Heineken Central Cervecera - Original Lata - 269ml V1 - -','Cerveza Heineken Central Cervecera - Original Lata - 330ml V1 - -','Cerveza TKT Central Cervecera - Original Botella Retornable 330ml V1 - -','Cerveza TKT Central Cervecera - Original Lata - 330ml V1 - -','Cerveza Sol Central Cervecera - Original Botella Vidrio 330ml V1 - -','Cerveza Sol Central Cervecera - Original Botella Vidrio 250ml V1 - -','Cerveza Sol Central Cervecera - Original Lata - 269ml V1 - -','Cerveza Andina Central Cervecera - Original Botella Retornable 330ml V2 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 330ml V1 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 250ml V2 - - ','Cerveza Andina Central Cervecera - Original Botella Retornable 250ml V1 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 330ml V2 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 330ml V1 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 250ml V2 - - ','Cerveza Andina Central Cervecera - Light Botella Retornable 250ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 269ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 269ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 476ml V2 - - ','Cerveza Andina Central Cervecera - Original lata - 476ml V1 - - ','Cerveza Andina Central Cervecera - light lata - 330ml V2 - - ','Cerveza Andina Central Cervecera - light lata - 330ml V1 - - ','Cerveza Miller Central Cervecera - Lite Botella vidrio 330ml V1 - - ','Cerveza Andina Central Cervecera - Original lata - 330ml V2 X6 -','Cerveza Andina Central Cervecera - Light lata - 269ml V2 X6 - ','Cerveza TKT Central Cervecera - Original Lata - 330ml V1 X6 -','Cerveza Sol Central Cervecera - Original Lata - 269ml V1 X6 -','Cerveza Andina Central Cervecera - Original lata 269ml V2 X6 -']"
                    }
                ],
                "rule": {
                    "rule_id": 15,
                    "name": "Productos competencia veredicto",
                    "version": "1",
                    "description": "valida si se cumple la regla, no productos competencias no vacios",
                    "function_name": "check_competence_veredict",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 20,
                "taskruleparameters": [],
                "rule": {
                    "rule_id": 17,
                    "name": "Reconoce contaminacion competencia",
                    "version": "1",
                    "description": "Reconoce productos competencia ",
                    "function_name": "check_competence",
                    "weight": 1
                }
            },
            {
                "task_rule_id": 18,
                "taskruleparameters": [],
                "rule": {
                    "rule_id": 16,
                    "name": "Reconoce espacios vacios",
                    "version": "1",
                    "description": "Reconoce slots vacioes",
                    "function_name": "check_empty_slots",
                    "weight": 1
                }
            }
        ]
    }
]
```