import React, { useState } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card'

export default function Login() {
  const endpoint = 'http://localhost:3001'

  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'username':
        setInput({ ...input, username: e.target.value })
        break
      case 'password':
        setInput({ ...input, password: e.target.value })
        break
      default:
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.username || !input.password) {
      alert('Username and password are required.')
    } else {
      try {
        const loginData = { ...input }
        await Axios.post(`${endpoint}/auth/login`, loginData).then((res) => {
          console.log(res)
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <Card style={{ borderRadius: '15px' }} className="p-3 my-auto card-block">
      <Card.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <Card.Title className="text-center">
                <h1>Login</h1>
              </Card.Title>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={input.username}
                  onChange={handleChange}
                  name="username"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={input.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Login
                </button>
            </form>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
