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

### Documentación hecha en postman

[postman](https://documenter.getpostman.com/view/1864602/2sA3BgAFhQ)

7. Test those endpoints
```
localhost:3000/api/tasks/clone/:id number
```


Aquí está el JSON de configuración para la tarea:

```
POST: localhost:3000/api/tasks

json
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

```
POST: localhost:3000/api/rules

json
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