import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
import Account from './Account'
import Form from '../Form'

function App() {
  return (
    <Provider store={store}>
      <Form></Form>
      <Account></Account>
    </Provider>
  )
}

export default App
