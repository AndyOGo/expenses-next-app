import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'unstated'

// adjust NextJs App as suggested in example
// @link: https://github.com/bennygenel/nextjs-with-unstated/blob/master/pages/_app.js
class ExpensesApp extends App {
  render () {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default ExpensesApp
