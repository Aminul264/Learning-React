import React, { useState } from 'react'

const Form = () => {

    //created  empty object for storing the users information
    let userInfo = {

    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const HandlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const HandleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const HandleNameChange = (e) => {
        setName(e.target.value);
    }

    const HandleSubmit = (e) => {
        console.log('submitted');

        // console.log(name, email, password);
        e.preventDefault();

        //updating the userInfo object
        userInfo.name = name;
        userInfo.email = email;
        userInfo.password = password;
        console.log(userInfo);
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={HandleSubmit}>

                <div >
                    <label htmlFor="name">Name : </label>
                    <input onChange={HandleNameChange}
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
                        required onChange={HandleEmailChange} />
                </div>

                <br /><br />

                <div>
                    <label htmlFor="password">password : </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required onChange={HandlePassChange} />
                </div>

                <br /><br />

                <button type="submit">Register</button>

            </form>
        </div >
    )
}
export default Form;