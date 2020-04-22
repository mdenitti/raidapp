<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
  $router->get('organisations',  ['uses' => 'OrganisationController@showAllOrganisations']);
  $router->get('organisations/{id}', ['uses' => 'OrganisationController@showOneOrganisation']);
  $router->post('organisations', ['uses' => 'OrganisationController@create']);
  $router->delete('organisations/{id}', ['uses' => 'OrganisationController@delete']);
  $router->put('organisations/{id}', ['uses' => 'OrganisationController@update']);

  $router->get('contacts',  ['uses' => 'ContactController@showAllContacts']);
  $router->get('contacts/{id}', ['uses' => 'ContactController@showOneContact']);
  /* $router->get('contactsorg/{id}', ['uses' => 'ContactController@showOneContactOrg']); */
  $router->get('contactsorg', ['uses' => 'ContactController@showContactOrganisations']);
  $router->post('contacts', ['uses' => 'ContactController@create']);
  /* $router->post('contactsorg', ['uses' => 'ContactController@updateContactOrganisations']); */
  $router->delete('contacts/{id}', ['uses' => 'ContactController@delete']);
  $router->put('contacts/{id}', ['uses' => 'ContactController@update']);
  $router->put('contactsorg/{id}', ['uses' => 'ContactController@update']);

  $router->get('quotes',  ['uses' => 'QuoteController@showAllQuotes']);
  $router->get('quotes/{id}', ['uses' => 'QuoteController@showOneQuote']);
  $router->post('quotes', ['uses' => 'QuoteController@create']);
  $router->delete('quotes/{id}', ['uses' => 'QuoteController@delete']);
  $router->put('quotes/{id}', ['uses' => 'QuoteController@update']);

  $router->get('products',  ['uses' => 'ProductController@showAllProducts']);
  $router->get('products/{id}', ['uses' => 'ProductController@showOneProduct']);
  $router->post('products', ['uses' => 'ProductController@create']);
  $router->delete('products/{id}', ['uses' => 'ProductController@delete']);
  $router->put('products/{id}', ['uses' => 'ProductController@update']);



});