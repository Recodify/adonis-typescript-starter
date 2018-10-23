/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route');

// Index
Route.on('/').render('welcome');

// App
Route.get('properties', 'PropertyController.index');

// Util
Route.get('health', 'HealthController.index');

// Auth
Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')
Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')