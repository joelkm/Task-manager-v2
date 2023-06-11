import axios from "axios";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

// TO DO: NO USE

async function register() {

}

async function login(data: any) {
    return axios.post("/user/login",
      { email: data.email, password: data.password }, {
      headers: {
        "Content-type": "application/json",
      },
    }
    )
    .then((response) => {
      navigate('/');
    })
    .catch( (error) => {
      console.log(error);
    })
}

async function createTask(data: any) {
    
}

async function getTasks(id: String) {
    
}

async function updateTask(data: any) {
    
}

async function deleteTask(id: String) {
    
}

export { register, login, createTask, getTasks, updateTask, deleteTask }