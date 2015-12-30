(function() {
    'use strict';

    angular
        .module('app.sliders')
        .controller('SlidersController', SlidersController);

    SlidersController.$inject = ['$http', '$timeout', '$stateParams', 'Sliders'];
    /* @ngInject */
    function SlidersController($http, $timeout, $stateParams, Sliders) {
      var vm = this;

    }

})();
