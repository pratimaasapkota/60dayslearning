import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p>No tasks yet. Add one!</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
