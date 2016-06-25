(
    function () {
      'use strict';
      angular.module('app.google-storage').
      controller('GoogleStorageController', GoogleStorageController);

        //function to push picture to google storage.

        function GoogleStorageController() {
            //create local scope as vm which stands for "view model"
            var vm = this;

            //create google cloud variable

            //get a reference to the vision component
            var vision = googleCloud.vision();
            var image = '/images/mosquito_larvae.jpg';

            //            //use the vision api to detect all labels within the picture.
            vision.detectLabels(image, Labels);

            function Labels(error, labels, apiResponse){
                alert(error.message);
                console.log(apiResponse);
                vm.labels = labels;
                

            }




        }

      
    }
)();