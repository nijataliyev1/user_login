import React from 'react'
import './UserLogin.css'
import { useState } from 'react'

const UserLogin = () => {
    function passKeyup (e) {
        if (e.target.value.length >= 8) {
            e.target.style.border = "#24A95D solid 1.5px";
            e.target.parentElement.children[e.target.parentElement.children.length - 1].style.backgroundColor = "rgba(118, 54, 209, 1)"
            e.target.parentElement.children[e.target.parentElement.children.length - 1].style.color = "rgba(0, 0, 0, 1)"
        }
        else {
            e.target.parentElement.children[e.target.parentElement.children.length - 1].style.backgroundColor = "rgba(118, 54, 209, 0.5)"
            e.target.parentElement.children[e.target.parentElement.children.length - 1].style.color = "rgba(0, 0, 0, 0.5)"
            e.target.style.border = "#F74141 solid 1.5px";
        }
    }
    function submit (e) {
        if (document.querySelector(".UserLogin .email").value.substring(document.querySelector(".UserLogin .email").value.length - 3,document.querySelector(".UserLogin .email").value.length) == ".ru") {
            document.querySelector(".UserLogin .email").style.border = "rgb(110, 105, 105) solid 1.5px";
        }
        else {
            document.querySelector(".UserLogin .email").style.border = "#F74141 solid 1.5px";
        }
        

    }
    return (
        <div className='UserLogin'>
            <h2>Log in</h2>
            <p>Email</p>
            <input type="email" className='email' placeholder='example@mail.ru' />
            <p>Password</p>
            <input type="password" className='pass' placeholder='Must have at least 8 characters' onKeyUp={passKeyup}/>
            <button onClick={submit}>Log in</button>
        </div>
    )
}

export default UserLogin
