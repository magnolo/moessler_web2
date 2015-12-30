(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('PagesController', PagesController);

    PagesController.$inject = ['$http', '$timeout', '$stateParams', 'Pages'];
    /* @ngInject */
    function PagesController($http, $timeout, $stateParams, Pages) {
      var vm = this;

    }

})();
