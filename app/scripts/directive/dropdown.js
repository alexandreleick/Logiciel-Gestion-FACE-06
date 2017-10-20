angular.module('billetterieProjectApp')
    .directive("dropdown", function() {
    return {
        restrict: "AEC",
        link: function(scope, element, attrs) {
            element.dropdown();
        }
    }
});