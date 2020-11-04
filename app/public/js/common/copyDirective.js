'use strict';

const { clipboard } = require('electron')

app.directive('copyDirective', function (
    notificationFactory
) {
    return {
        restrict: 'A',
        
        link: function ($scope, elem, attrs) {

            elem.bind('click', function () {
                var info = elem.attr('data-copy');
                clipboard.writeText(info);
                notificationFactory.success("Song url copied to clipboard!");
            });
        }
    };
});