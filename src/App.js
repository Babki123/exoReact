import logo from './logo.svg';
import './App.css';
import Contact  from './Component/Contact/Contact';
import ContactProvider, { ContactContext } from './context/ContactContext';
function App() {
  return (
    <div>
    <h1> Laum</h1>
      <Contact/>
    
    </div>

  );
}

export default App;
