import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import Login from './components/login/login';
RWR.registerComponent('Login', Login);
