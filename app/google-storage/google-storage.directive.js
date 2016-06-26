/**
 * Created by pablo on 6/25/16.
 */
(
    function () {
        angular.module('app.google-storage')
            .directive('fileUpload', FileUploadController);
        FileUploadController.$inject = ['$parse']
        function FileUploadController($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function(){
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }

    }
)();