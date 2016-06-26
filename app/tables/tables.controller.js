/**
 * Created by pablo on 6/26/16.
 */
(
    function () {
        'use strict';
        angular.module('app.tables').controller('TablesController', TablesController);
        TablesController.$inject = ['$rootScope', '$scope'];
        function TablesController($rootScope, $scope) {
            var vm = this;
            var reference = $rootScope.firebase.database().ref('images');
            reference.on('child_added', SnapShot);
            vm.ref_total = [];
            
;
            function SnapShot(snapshot){
                $scope.$apply(function () {
                    vm.information=snapshot.val()
                    console.log(vm.information.labelAnnotations.total)
                    vm.ref_total.push(vm.information);
                    console.log(vm.ref_total[0].labelAnnotations.total)
                }

            )
                
                
                
            }

        }
    }
)();