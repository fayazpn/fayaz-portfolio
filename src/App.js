import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
function App() {
  return (
    <div className='App'>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' component={Home}  />
            </Switch>
            <Footer />
          </Router>
    </div>
  )
}

export default App
