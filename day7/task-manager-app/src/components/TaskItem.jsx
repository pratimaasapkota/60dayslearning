import { useTasks } from '../hooks/useTasks';

function TaskItem({ task }) {
  const { dispatch } = useTasks();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span>{task.text}</span>
      <button onClick={handleRemove} className="text-red-500">Remove</button>
    </li>
  );
}

export default TaskItem;
