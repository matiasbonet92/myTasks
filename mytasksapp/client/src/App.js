import react, {useEffect, useState} from 'react';
import * as api from './api/index.js';
import Navbar from './components/NavBar/Navbar.js'
import Footer from './components/Footer/Footer.js'

function App() {

  const [tasks,setTasks] = useState([]);

  async function getData(){
    const {data} = await api.fetchTasks();
    setTasks(data);
    console.log(data);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="App">
      <Navbar/>
      {tasks?.map((task)=>{
        return(
          <h2>{task.title}</h2>
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
