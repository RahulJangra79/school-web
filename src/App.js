import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome'; 
import Teacher from './components/Teacher';
import Classes from './components/Classes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Classes/>
      <Teacher/>
    </div>
  );
}

export default App;
