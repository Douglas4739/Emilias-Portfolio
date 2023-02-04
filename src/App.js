import './App.css';
import Header from './Header.js';
import Value from './Value.js';
import Graph from './Graph.js';
import Contributions from './Contributions.js';
import About from './About.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Value />
      <Graph />
      <Contributions />
      <About />
    </div>
  );
}

export default App;
