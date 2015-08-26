/**
 * Created by tibus on 08/05/15.
 */

var tounServices = angular.module('tounServices', ['ngResource']);

tounServices.factory('App', ['$resource', function($resource) {

    return $resource('data/app.json');

}]);

tounServices.factory('Portfolio', ['$resource', function($resource) {

    return {
        all : function(cb) {
            $resource('data/portfolio.json').get(function(data) {
                cb(data);
            });
        },
        findById : function(id, cb) {
            $resource('data/portfolio.json').get(function(data) {

                var array = [];
                var elmt = data.items[id];

                for(var d in data.items) {
                    array.push(d);
                }

                cb(elmt, array[array.indexOf(id) + 1], array[array.indexOf(id) - 1]);
            });
        }
    };
}]);

tounServices.factory('Clients', ['$resource', function($resource) {

    return $resource('data/clients.json');

}]);

tounServices.factory('Skills', ['$resource', function($resource) {

    return $resource('data/skills.json', {}, {
        all: { method:'GET', isArray:true }
    });

}]);