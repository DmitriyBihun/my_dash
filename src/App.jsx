import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import projects from './projects'

function App() {

  return (
   <Dashboard projects={projects} />
  )
}

export default App
