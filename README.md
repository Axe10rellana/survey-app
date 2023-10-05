# Survey App

## Repositorio de la aplicación web Survey App hecha en Laravel y React.

### Comandos

#### Crear proyecto

- laravel new laravel-react-survey

#### Subir migraciones a la base de datos

- php artisan migrate

#### Ejecutar servidor de Laravel

- php artisan serve

#### Consultar la lista de rutas

- php artisan route:list

#### Abrir un enlace para comunicarse con la carpeta storage

- php artisan storage:link

#### Crear controlador

- php artisan make:controller AuthController
- php artisan make:controller SurveyController --api
- php artisan make:controller DashboardController

#### Crear request

- php artisan make:request LoginRequest
- php artisan make:request SignupRequest
- php artisan make:request StoreSurveyRequest
- php artisan make:request UpdateSurveyRequest
- php artisan make:request StoreSurveyAnswerRequest

#### Crear resource

- php artisan make:resource SurveyResource
- php artisan make:resource SurveyQuestionResource
- php artisan make:resource SurveyAnswerResource
- php artisan make:resource SurveyDashboardResource

#### Crear model

- php artisan make:model Survey -mcrR
- php artisan make:model SurveyQuestion -m
- php artisan make:model SurveyAnswer -m
- php artisan make:model SurveyQuestionAnswer -m

#### Resetear las tablas de la base de datos

- php artisan migrate:fresh