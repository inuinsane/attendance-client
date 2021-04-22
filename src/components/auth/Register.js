import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        username: "",
        nip: "",
        bagian: "",
        jabatan: "",
        phone: "",
        password: "",
        password_verify: "",
    });

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setInput({ ...input, name: e.target.value });
                break;
            case "email":
                setInput({ ...input, email: e.target.value });
                break;
            case "username":
                setInput({ ...input, username: e.target.value });
                break;
            case "nip":
                setInput({ ...input, nip: e.target.value });
                break;
            case "bagian":
                setInput({ ...input, bagian: e.target.value });
                break;
            case "jabatan":
                setInput({ ...input, jabatan: e.target.value });
                break;
            case "phone":
                setInput({ ...input, phone: e.target.value });
                break;
            case "password":
                setInput({ ...input, password: e.target.value });
                break;
            case "re-password":
                setInput({ ...input, password_verify: e.target.value });
                break;
            default:
        }

    }

    const passwordValidation = () => {
        if (input.password !== input.password_verify) {
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordValidation()) {
            alert('Password missmatch');
        }

        else {
            try {
                const registerData = { ...input };
                await axios.post('http://localhost:3001/auth', registerData)
                    .then((res) => {
                        console.log(res.data);
                    });
            } catch (error) {
                console.log(error.response.data);
            }
        }

    }

    return (
        <>
            <h1>This is register page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Fullname" onChange={handleChange} value={input.name} />
                <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={input.email} />
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={input.username} />
                <input type="text" name="nip" id="nip" placeholder="NIP" onChange={handleChange} value={input.nip} />
                <select name="bagian" id="bagian" onChange={handleChange}>
                    <option defaultValue>Bagian</option>
                    <option value="Enjiniring">Enjiniring</option>
                    <option value="Pemeliharaan">Pemeliharaan</option>
                    <option value="Operasi">Operasi</option>
                    <option value="KSA">KSA</option>
                    <option value="K3">K3</option>
                    <option value="Lingkungan">Lingkungan</option>
                    <option value="Keuangan">Keuangan</option>
                    <option value="Pengadaan">Pengadaan</option>
                    <option value="Manager">Manager</option>
                </select>
                <input type="text" name="jabatan" id="jabatan" placeholder="Jabatan" onChange={handleChange} value={input.jabatan} />
                <input type="number" name="phone" id="phone" placeholder="Nomor HP" onChange={handleChange} value={input.phone} />
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                <input type="password" name="re-password" id="re-password" placeholder="Confirm Password" onChange={handleChange} />


                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;