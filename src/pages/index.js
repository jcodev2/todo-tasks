import { useState } from 'react'
import Confetti from 'react-confetti'
import Form from 'src/components/Form'
import Layout from 'src/components/Layout/Layout'
import TodoTask from 'src/components/TodoTask'

const LayoutProps = {
  title: 'Todo App',
  description: 'Todo App'
}

export default function Home() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <Layout {...LayoutProps}>
      <section className='todo'>
        <Form
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          todos={todos}
          setTodos={setTodos}
          setError={setError}
          setShowConfetti={setShowConfetti}
        />

        <ul className='todoTasks'>
          <h2 className='todoTitle'>Todo List</h2>

          <TodoTask
            todos={todos}
            setTodos={setTodos}
            error={error}
          />
        </ul>

        {showConfetti && (
          <Confetti
            width={`${window.innerWidth - 100}px`}
            height={`${window.innerHeight - 100}px`}
            tweenDuration={1000}
            className='confetti'
          />
        )}
      </section>
    </Layout>
  )
}
