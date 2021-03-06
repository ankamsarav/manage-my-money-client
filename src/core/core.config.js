(function () {
    'use strict';

    var core = angular.module('app.core');

    // Application configuration values
    var config = {
        appErrorPrefix: '[Manage My Money Error] ',
        appTitle: 'Manage My Money'
    };

    core.value('config', config);

    // Configure the app
    core.config(configure);

    configure.$inject =
        ['$compileProvider', '$logProvider', 'exceptionHandlerProvider'];

    /* @ngInject */
    function configure(
        $compileProvider, $logProvider, exceptionHandlerProvider) {

        // During development, you may want to set debugInfoEnabled to true. This is required for tools like
        // Protractor, Batarang and ng-inspector to work correctly. However do not check in this change.
        // This flag must be set to false in production for a significant performance boost.
        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
