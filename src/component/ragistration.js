import React, { useState } from 'react'
import './style.css';
const Registration = ({data}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onchange={(e) => setUsername}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{data}</button>
            </form>

        </>
    )
}
export default Registration