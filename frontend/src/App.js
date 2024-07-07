import './App.css';
// import { 
//   BrowserRouter as Router,
//   Route, 
//   Routes 
// }from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
