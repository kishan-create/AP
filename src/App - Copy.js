import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
//import Sidebar from './components/Sidebar/Sidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Mainouter from './components/page-main/main-outer';
import Candidatetable from './components/Candidatee-list-table/candidate-table';
 
import './css/style.css';

function App() {
  return (
    <div className="App">
      
      <Sidebar/>
      <Topbar/>
      <Mainouter/>
      <Candidatetable/>
    </div>
  );
}

export default App;
