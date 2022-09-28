import express from 'express';
import { getTasks, createTasks, getTaskById, deleteTask, updateTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;