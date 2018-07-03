angular.module('billetterieProjectApp')
    .directive("jq-dropdown", function() {
    return {
        restrict: "AEC",
        link: function(scope, element, attrs) {
            element.dropdown();
        }
    }
});