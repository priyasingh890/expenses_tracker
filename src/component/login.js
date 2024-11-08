import React, { useState } from 'react'
const Login = ({data}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>

            <form>
                <input
                    type = "text"
                    placeholder = "Username"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type = "password"
                    placeholder = "password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{data}</button>

            </form>

        </>
    )
}
export default Login