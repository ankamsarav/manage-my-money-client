(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    configure.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configure($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                template: '<mmm-dashboard></mmm-dashboard>'
            })
            .state('accounts', {
                url: '/accounts',
                template: '<mmm-accounts></mmm-accounts>'
            })
            .state('accounts.detail', {
                url: '/:accountId',
                templateUrl: 'components/accounts/transactions-panel/transactions-panel.html',
                resolve: {
                    transactions: function(transactionService, $stateParams) {
                        return transactionService.getTransactions($stateParams.accountId);
                    }
                },
                // intermediate controller to capture the result of resolve and pass it to the people directive
                controller: ['transactions', function(transactions) { this.transactions = transactions; }],
                controllerAs: 'vm'
            });
    }
})();