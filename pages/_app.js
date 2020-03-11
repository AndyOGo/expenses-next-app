import App from 'next/app';
import React from 'react';
import { Provider } from 'unstated';
import 'bootstrap/scss/bootstrap-reboot.scss';

// adjust NextJs App as suggested in example
// @link: https://github.com/bennygenel/nextjs-with-unstated/blob/master/pages/_app.js
class ExpensesApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default ExpensesApp;
