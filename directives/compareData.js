/**
 * Created with JetBrains WebStorm.
 * User: Janez
 * Date: 2013.08.31.
 * Time: 1:00
 */

angular.module('jz-validators', []).directive('compareData', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ctrl) {
            var cpWidget = elm.inheritedData('$formController')[attr.compareData];

            ctrl.$parsers.push(function (value) {
                if (value === cpWidget.$viewValue) {
                    ctrl.$setValidity('compareData', true);
                    return value;
                }
                ctrl.$setValidity('compareData', false);
            });

            cpWidget.$parsers.push(function (value) {
                ctrl.$setValidity('compareData', value === ctrl.$viewValue);
                return value;
            });
        }
    };
}]);
