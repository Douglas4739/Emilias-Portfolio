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
    { name: 'John Doe', amount: 100 },
    { name: 'Jane Smith', amount: 50 },
    { name: 'Bob Johnson', amount: 25 },
    { name: 'Terra Bastion', amount: 20 },
  ];

  return (
    <div className="App">
      <Header />
      <Value />
      <Graph />
      <Contributions />
      <ContributorsList contributors={contributors} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
