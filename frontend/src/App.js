import Globalstyle from "./styles/global";
import Form from "./components/form/Form";
import Grid from "./components/grid/Grid";
import {toast, ToastContainer, toastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000"); 
    } 
    catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [setTasks]);

  return (
    <>
      <div class="Container">
        <h2>LISTA DE TAREFAS</h2>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>
        <Grid tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit}/>
      </div>
      <ToastContainer autoClose={3000} position="toast.POSITION.TOP_CENTER" />
      <Globalstyle/>
    </>
  );
}

export default App;
