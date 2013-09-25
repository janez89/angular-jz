/**
 * Created with JetBrains WebStorm.
 * User: Janez
 * Date: 2013.08.31.
 * Time: 1:00
 */

// Usage: <input ng-unique-data="/check?username=%s" />

angular.module('jz-validators', []).directive('uniqueData', [ '$http', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ctrl) {
            ctrl.$parsers.push(function (value) {
                if (value && value.length > 3) {
                    $http.get(attr.uniqueData.replace('%s', value))
                        .success(function (data) {
                            if (data.ok && !data.err)
                                return ctrl.$setValidity('uniqueData', true);
                            ctrl.$setValidity('uniqueData', false);
                        })
                        .error(function (err) {
                            ctrl.$setValidity('uniqueData', false);
                        });
                    return value;
                }
            });
        }
    };
}]);