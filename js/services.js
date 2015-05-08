/**
 * Created by tibus on 08/05/15.
 */

var tounServices = angular.module('tounServices', ['ngResource']);

tounServices.factory('App', ['$resource', function($resource) {

    return $resource('data/app.json');

}]);

tounServices.factory('Portfolio', ['$resource', function($resource) {

    return $resource('data/:portfolioId.json', {}, {

        all: { method:'GET', params : { portfolioId : 'portfolio'} }

    });

}]);

tounServices.factory('Clients', ['$resource', function($resource) {

    return $resource('data/clients.json');

}]);

tounServices.factory('Skills', ['$resource', function($resource) {

    return $resource('data/skills.json', {}, {
        query: { method:'GET', isArray:true }
    });

}]);