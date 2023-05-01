import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"

import { createStore } from 'redux'
import { Provider } from 'react-redux'


const defaultState = {
  cash: 5,
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case 'Add cash':
      return {...state, cash: state.cash + action.payload}
    
    case 'No cash':
      return {...state, cash: state.cash - action.payload}

    default: return state
  }
}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
