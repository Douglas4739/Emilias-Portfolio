import './App.css';
import Header from './Header.js';
import Value from './Value.js';
import Graph from './Graph.js';
import Contributions from './Contributions.js';
import ContributorsList from './ContributorsList.js';
import About from './About.js';
import Footer from './Footer.js';


function App() {
  const contributors = [
    { name: 'Douglas Ede', amount: 1 },
    { name: 'Grandpa and Grandma Munoz/*ask for spelling*', amount: 500 },
    { name: 'Grandpa and Grandma Ede', amount: 450 },
    { name: 'Stephanie Munoz', amount: 360 },
  ];

  return (
    <div className="App">
      <Header />
      <Value />
      <Graph />
      {/* <Contributions /> */}
      <ContributorsList contributors={contributors} />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
