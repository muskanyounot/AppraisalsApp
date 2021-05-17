import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { FirstPage } from './components/FirstPage/FirstPage';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <>
   <Navbar />
   <FirstPage />
   <QuestionBank />
   </>
  
  )
}

export default App;
