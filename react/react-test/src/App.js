import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        <br></br>
        <Profile></Profile>
        <br></br>
      </header>
    </div>
  );
}

export default App;
