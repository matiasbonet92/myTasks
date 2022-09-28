import Home from './pages/Home.js'
import TaskDetails from './pages/TaskDetails.js'
import AddTask from './pages/AddTask.js'
import EditTask from './pages/EditTask.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/taskdetails/:id" element={<TaskDetails/>}/>
          <Route path="/addtask" element={<AddTask/>}/>
          <Route path="/edittask/:id" element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
