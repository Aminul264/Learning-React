import React, { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState({ name: '', email: '', password: '' });

    //destructuring the object
    const { name, email, password } = user;

    const HandleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e) => {
        console.log('submitted');
        console.log(user);
        e.preventDefault();
    }


    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={HandleSubmit}>

                <div >
                    <label htmlFor="name">Name : </label>
                    <input
                        onChange={HandleChange}
                        type="text"
                        name="name"
                        value={name}
                        required />
                </div>

                <br /><br />

                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={HandleChange} />
                </div>

                <br /><br />

                <div>
                    <label htmlFor="password">password : </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={HandleChange} />
                </div>

                <br /><br />

                <button type="submit">Register</button>

            </form>
        </div >
    )
}
export default Form;