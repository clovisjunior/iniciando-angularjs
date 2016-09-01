(function(){
    'use strict';

    angular
        .module('app.common.directive')
        .directive('enterInputText', enterInputText);

    /* @ngInject */
    function enterInputText() {
            var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link (scope, element, attrs) {

            element.bind('keydown keypress', function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.enterInputText);
                    });

                    event.preventDefault();
                }
            });
        };
    }

})();
