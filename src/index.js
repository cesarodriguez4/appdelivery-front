import angular from 'angular';
import {tdheader} from './app/components/tdheader';
import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';
export const app = 'app';

import 'bootstrap/dist/css/bootstrap.css';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('tdheader', tdheader)
  .component('app', hello);
