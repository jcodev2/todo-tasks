import { cleanup, render } from '@testing-library/react'
import { useEffect } from 'react'
import { afterAll, describe, it } from 'vitest'
import styles from './Form.module.css'

const Form = ({
  todos,
  newTodo,
  setError,
  setNewTodo,
  setTodos,
  setShowConfetti
}) => {
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [setTodos])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  const handleAddTodo = (e) => {
    e.preventDefault()

    const regex = /^[a-zA-Z0-9 .,!?]+$/

    if (newTodo.trim() && regex.test(newTodo) && newTodo.length <= 40) {
      setTodos([...todos, { text: newTodo, completed: false }])
      setNewTodo('')
      setError('')
      setShowConfetti(true)

      setTimeout(() => {
        setShowConfetti(false)
      }, 3000)
    } else {
      setError('Please enter a valid todo')
      setNewTodo('')
    }
  }

  return (
    <form className={styles.todoForm}>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Add a new todo'
        className={styles.inputText}
      />
      <input
        type='submit'
        onClick={handleAddTodo}
        value='Add'
        className={styles.inputSubmit}
        disabled={!newTodo}
      />
    </form>
  )
}

describe('Form', () => {
  afterAll(cleanup)

  it('should render', () => {
    render(
      <Form
        todos={[]}
        newTodo=''
        setNewTodo={() => {}}
        setTodos={() => {}}
      />
    )
  })
})
