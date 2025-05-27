import './App.css'
import Dashboard from './maincomponents/Dashboard'
import Sidebar from './maincomponents/Sidebar'
import Background from './subcomponents/dashboardComponents/background'

function App() {

  return(
    <div className='app'>
      <Sidebar />
      <Background />
      <Dashboard />
    </div>
  )
}

export default App
