import React, { useState } from 'react';
import Axios from 'axios';

export default function Login() {

    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username":
                setInput({ ...input, username: e.target.value });
                break;
            case "password":
                setInput({ ...input, password: e.target.value });
                break;
            default:
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.username || !input.password) {
            alert('Username and password are required.')
        } else {
            try {
                const loginData = { ...input };
                await Axios.post("http://localhost:3001/auth/login", loginData)
                    .then((res) => {
                        console.log(res.config.validateStatus);
                    });
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <h1>This is Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" placeholder="Username" value={input.username} onChange={handleChange} />
                <input type="password" name="password" id="password" placeholder="Password" value={input.password} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}