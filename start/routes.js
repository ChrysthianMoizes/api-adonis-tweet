'use strict';

const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.get('/app', 'AppController.index').middleware(['auth']);

Route.get('/', async () =>{
  return 'Welcome to the Jungle';
});

Route.route('/teste/:id/:name?', async ({params}) => {
  return 'Rota GET, POST e PUT = ' + params.id + params.name;
}, ['GET', 'POST', 'PUT']);


Route.group(() => {
  Route.resource('tweets', 'TweetController')
  .apiOnly().except('update');
}).middleware('auth');

