import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  HomeLayout from  './Layouts/HomeLayout'

import './App.css';
function App() {
  return (
    <div className="App">
       <Router>
       <Route  path="/">
          <HomeLayout />
        </Route>
      </Router>
    </div> 
  );
}

export default App;
