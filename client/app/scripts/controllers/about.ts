/// <reference path="../app.ts" />

'use strict';

module bdxHackathonApp {
  export interface IAboutScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class AboutCtrl {

    constructor (private $scope: IAboutScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('bdxHackathonApp')
  .controller('AboutCtrl', bdxHackathonApp.AboutCtrl);
