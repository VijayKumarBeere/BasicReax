import { Provider } from 'react-redux'
import './App.css'
import Account from './Account'
import Form from '../Form'
import { store } from './apiHandling/mainstore'
import User from './apiHandling/User'

function App() {
  return (
    // <Provider store={store}>
    //   <Form></Form>
    //   <Account></Account>
    // </Provider>
    <Provider store={store}>
      <User></User>
    </Provider>
  )
}

export default App
