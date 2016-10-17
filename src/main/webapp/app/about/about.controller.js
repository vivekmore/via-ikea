(function () {
    'use strict';

    angular
        .module('viaikeaApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', 'AboutService'];

    function AboutController($scope, AboutService) {
        var vm = this;

        $scope.todayMessage = todayToString();

        vm.todayToString = todayToString;

        function todayToString() {
            var today = new Date();
            var dayName = today.toLocaleString('en-us', {weekday: 'long'});
            var monthName = today.toLocaleString('en-us', {month: 'long'});
            var date = today.getDate();

            return 'Today is ' + dayName + ', the ' + dateWithOrdinal(date) + ' of ' + monthName + ', ' + today.getFullYear();
        }

        function dateWithOrdinal(date) {
            return date + AboutService.getOrdinalIndicator(date);
        }

    }
})();
