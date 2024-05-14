import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Icons from './components/Icons'; 
import Project from './components/Project';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icons /> {
        <Home />
      </header>
    </div>
  );
}

export default App;
