(function() {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$http', '$timeout', '$stateParams', 'Events'];
    /* @ngInject */
    function EventsController($http, $timeout, $stateParams, Events) {
      var vm = this;

    }

})();
