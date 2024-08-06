import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { TodoList } from './components/TodoList/TodoList'

function App() {

  return (
    <div>
      <Header />
      <Input />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App
