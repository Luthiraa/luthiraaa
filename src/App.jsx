import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Icons from './components/Icons'; // Import the Icons component
import Project from './components/Project'; // Import the Project component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icons /> {/* Use the Icons component */}
        <Home />
        {/* <Project />  */}
      </header>
    </div>
  );
}

export default App;