import axios from 'axios';

const url = 'http://localhost:5000/tasks';

export const fetchTasks = () => axios.get(url);
export const fetchTaskById = (id) => axios.get(`${url}/${id}`);
export const createTask = (newTask) => axios.post(url, newTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
export const updateTask = (id, updateTask) => axios.patch(`${url}/${id}`, updateTask);