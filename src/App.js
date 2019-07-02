import React from 'react'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import Users from './Users'
import { combineReducers } from 'redux'
import UsersReducer from './Users.reducer'
import './App.css'
const rootReducer = combineReducers({
  users: UsersReducer
})
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

function App() {
return(
  <Provider store={store}>
      <Users />
  </Provider>
  )
}

export default App;