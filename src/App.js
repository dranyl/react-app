import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='navbar bg-dark'>
          <h1>
            <a href='/'>
              {/* <i class='fas fa-code'></i> dranyl */}
              <i class='fas fa-terminal'></i> dranyl
              {/* <i class='fas fa-user-secret'></i>dranyl */}
            </a>
          </h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
