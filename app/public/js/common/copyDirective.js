'use strict';

const { clipboard } = require('electron')
const soundCloudURL = "https://soundcloud.com/"

app.directive('copyDirective', function (
    $http,
    notificationFactory
) {
    return {
        restrict: 'A',
        
        link: function ($scope, elem, attrs) {

            elem.bind('click', function () {
                // console.log($cookies.getAll());

                // var session = require('electron').remote.session;
                // session.defaultSession.cookies.get({ url: soundCloudURL })
                // .then((cookies) => {
                //   let requestCookies = '';
                //   let first = true;
                //   cookies.forEach(c => {
                //     requestCookies += c.name + "=" + c.value;
                //     if (!first) {
                //       requestCookies += "; ";
                //     } else {
                //       first = false;
                //     }
                //   })
              
                //   console.log(requestCookies);
              
                  $http({
                    method: 'GET',
                    url: "https://soundcloud.com/discover",
                    withCredentials: true
                  }).then(function successCallback(response) {
                    var fs = require('fs');

                    fs.appendFile('test.txt', response['data'], function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    });

                    var info = elem.attr('data-copy');
                    clipboard.writeText(info);
                    notificationFactory.success("Song url copied to clipboard!");
                  }, function errorCallback(error) {
                    console.log('Error retrieving discover', error)
                  });
                // });
            });
        }
    };
});