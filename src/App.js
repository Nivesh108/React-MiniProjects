import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ColorGenerator from "./components/ColorGenerator/ColorGenerator"
import Counter from "./components/Counter/Counter"
import CustomClock from "./components/CustomClock/CustomClock"
import Home from "./components/Home/Home"
import TodoList from "./components/TodoList/TodoList"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/colorgenerator" element={<ColorGenerator />} />
        <Route path="/clock" element={<CustomClock />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  )
}

export default App
