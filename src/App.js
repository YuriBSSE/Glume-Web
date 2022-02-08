import logo from './logo.svg';
import './App.css';
import Body from "./components/body"
import {BrowserRouter as Router} from "react-router-dom"
import { Provider} from "react-redux"
import store from "./store/index"
function App() {

  return (
    <Provider store={store}>
        <div className="App">
        <Router>
          <Body/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
