import{BrowserRouter as Router,Route} from 'react-router-dom';
import Naslovna from './Naslovna';
import Dinamo from './Dinamo';
import Osijek from './Osijek';
import Gorica from './Gorica';
import Rijeka from './Rijeka';
import Hajduk from './Hajduk';
import Najbolji from './Najbolji';
import Header from "./Header.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/" component={Naslovna}></Route>
        <Route path="/Dinamo" component={Dinamo}></Route>
        <Route path="/Osijek" component={Osijek}></Route>
        <Route path="/Gorica" component={Gorica}></Route>
        <Route path="/Rijeka" component={Rijeka}></Route>
        <Route path="/Hajduk" component={Hajduk}></Route>
        <Route path="/Najbolji" component={Najbolji}></Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
