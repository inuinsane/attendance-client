import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid>
      <Router>
        <div className="row">
          <div className="col-md-12">
            <TopNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </Container>
  )
}

export default App
