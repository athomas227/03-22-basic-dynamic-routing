import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';


function App() {
  function Home() {
    return <h1>Hello</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/user/Mick' className="nav-link">Mick's Profile</Link>
            <Link to='/user/Alice' className="nav-link">Alice's Profile</Link>
            <Link to='/user/Steve' className="nav-link">Steve's Profile</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/user/:username' element={<UserProfile />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
