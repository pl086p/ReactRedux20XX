import React from 'react';
import ReactDOM from 'react-dom';
import AppFooter from 'AppFooter'; //alias of ../src/components/common/AppFooter';


describe('Test Component', () => {

  test('Test AppFooter loading', () => {

    const div = document.createElement( 'div');

    ReactDOM.render(<AppFooter />, div);

  });

});