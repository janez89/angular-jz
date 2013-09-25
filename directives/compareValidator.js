/**
 * Created with JetBrains WebStorm.
 * User: Janez
 * Date: 2013.08.31.
 * Time: 1:00
 */

angular.module('jz-validators', []).directive('compareValidator', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ctrl) {
            var cpWidget = elm.inheritedData('$formController')[attr.compareValidator];

            ctrl.$parsers.push(function (value) {
                if (value === cpWidget.$viewValue) {
                    ctrl.$setValidity('compare', true);
                    return value;
                }
                ctrl.$setValidity('compare', false);
            });

            cpWidget.$parsers.push(function (value) {
                ctrl.$setValidity('compare', value === ctrl.$viewValue);
                return value;
            });
        }
    };
}]);