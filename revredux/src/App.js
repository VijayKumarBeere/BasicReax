import './App.css';
import store from './store';
import Test from './Test';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <Test></Test>
    </Provider>
  );
}

export default App;
