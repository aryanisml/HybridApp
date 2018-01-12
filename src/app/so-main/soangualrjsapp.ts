import 'angular';
import 'angular-ui-router';
import * as angular from 'angular';
import { setAngularLib } from '@angular/upgrade/static';

setAngularLib(angular);

export const module = angular.module('dv.studyoptimizer', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('somainapp', {
    url: '/somainapp',
    // template: `
    //   <h2>Angular JS 1.x App </h2>
    // `
    templateUrl:'../../../../../client-studyOptimizer/so-main.html'
  });
  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});

module.run(($rootScope) => {
  console.log('Running AngularJS application');

  $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    console.log('$stateChangeStart', toState, toParams);
  });
});
