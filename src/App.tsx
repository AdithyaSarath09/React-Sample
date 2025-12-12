import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import About from './pages/about'
import Count from './pages/count'
import TodoPage from './pages/TodoPage'
import Calculator from './pages/calculator'
import Task from './pages/Task'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path ='/home'element={<Homepage />} />
        <Route path ='/About' element={<About />} />
        <Route path='/Count' element={<Count />} />
        <Route path ='/TodoPage' element={<TodoPage />}/>
        <Route path ='/Calculator' element={<Calculator />}/>
        <Route path ='/Task' element={<Task />}/>
              </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
