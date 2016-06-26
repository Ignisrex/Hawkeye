(
    function () {
      'use strict';
      angular.module('app.storage').
      controller('GoogleStorageController', GoogleStorageController);

        //function to push picture to google storage.
        GoogleStorageController.$inject = ['$rootScope', 'upload', '$scope'];

        function GoogleStorageController($rootScope, upload, $scope) {
            //create local scope as vm which stands for "view model"
            var vm = this;
            vm.download = getDownload;




         function getDownload(){



             var storage = firebase.storage($rootScope.firebase);
             console.log(storage)
             var storageRef=storage.ref();
             var reference = storageRef.child('mosquito_larvae.jpg');

             reference.getDownloadURL().then(function (url) {
                 alert(url)
                 $rootScope.firebase.database().ref('/images').push(url);
             }).catch(function (error) {
                 alert(error.code);
             });

         }




        }

      
    }
)();