import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>
            hello world
          </h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App;
