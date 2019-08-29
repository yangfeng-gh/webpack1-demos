import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  console.log(module.hot.status());
  module.hot.accept('./App.js', function (params) {
    console.log('Accepting the updated App module!');
  })
}
