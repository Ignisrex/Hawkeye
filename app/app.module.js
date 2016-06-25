/**
 * Created by pablo on 6/25/16.
 */


(function () {
    angular.module('app', ['app.google-storage',
        'ngRoute']).run(run).
        config(config);

    function run(){
        //put anything you'd like to run pre-emptively in the config folder here
        
    }
    
    function config($routeProvider) {
        $routeProvider.when('/google-storage', 
            
            {
                templateUrl: 'google-storage/google-storage.html',
                controller:'GoogleStorageController',
                controllerAs: 'vm',
                title:'Google Storage'
            
            }).otherwise(
            {
                redirectTo: '/'
            }
        )
    }

    
    
})();
