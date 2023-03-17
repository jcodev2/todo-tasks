import capitalizeFirstLetter from 'src/helpers/capitalizeFirstLetter'
import styles from './TodoTask.module.css'

const TodoTask = ({ todos, setTodos, error, children }) => {
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)

    setTodos(newTodos)
  }

  const handleToggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed

    setTodos(newTodos)
  }

  return (
    <>
      {children}

      {error && <p className='error rad-color-error'>{error}</p>}

      {todos.map((todo, index) => (
        <li
          key={index}
          className={`${styles.todoTask} ${todo.completed ? 'completed' : ''}`}
        >
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => handleToggleTodo(index)}
          />
          <p>{index + 1}.</p>{' '}
          <span className={styles.todoTaskSpan}>
            {capitalizeFirstLetter(todo.text)}
          </span>
          <button
            className={styles.todoTaskButton}
            onClick={() => handleRemoveTodo(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </>
  )
}

export default TodoTask
