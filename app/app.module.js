/**
 * Created by pablo on 6/25/16.
 */


(function () {
    angular.module('app', ['app.storage',
        'ngRoute',
    'app.tables',
    'firebase']).run(run).
        config(config);
    run.$inject = ['$rootScope'];
    function run($rootScope){
        //put anything you'd like to run when the app is initializing
        var config = {
            apiKey: "AIzaSyDz84a4vmKOuskEIdGrdrI6HwZiYm8weTU",
            authDomain: "zika-virus-18f6f.firebaseapp.com",
            databaseURL: "https://zika-virus-18f6f.firebaseio.com",
            storageBucket: "zika-virus-18f6f.appspot.com"
        };
       $rootScope.firebase = firebase.initializeApp(config);

    }
    
    function config($routeProvider) {
        $routeProvider.when('/google-storage', 
            
            {
                templateUrl: 'google-storage/google-storage.html',
                controller:'GoogleStorageController',
                controllerAs: 'vm',
                title:'Google Storage'
            
            }).when('/tables',
            {
                templateUrl: 'tables/tables.html',
                controller: 'TablesController',
                controllerAs: 'vm',
                title: 'Tables'
            }).otherwise(
            {
                redirectTo: '/'
            }
        )
    }

    
    
})();
