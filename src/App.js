import './App.css';
import Header from './Header.js';
import Value from './Value.js';
import Graph from './Graph.js';
import Contributions from './Contributions.js';
import About from './About.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Value />
      <Graph />
      <Contributions />
      <About />
      <Footer />
    </div>
  );
}

export default App;
