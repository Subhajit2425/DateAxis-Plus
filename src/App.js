import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  let todos = [
    {
      sno: 1,
      title: "You need to go to the market",
      desc: "You need to go to market to get this job done"
    },
    {
      sno: 2,
      title: "You need to go to the school",
      desc: "You need to go to market to get this job done2"
    },
    {
      sno: 3,
      title: "You need to go to the tuition",
      desc: "You need to go to market to get this job done3"
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
