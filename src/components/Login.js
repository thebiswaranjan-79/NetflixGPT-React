import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='NETFLIX'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

             {
                !isSignInForm && 
                <input  type='text' placeholder='Full Name' className='p-2 my-2 w-full  bg-gray-700'/>
             }

            <input  type='email' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
            <input  type='password' placeholder='Password' className='p-2 my-2 w-full  bg-gray-700'/>

            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>
              {isSignInForm ? "Sign In" : "SignUp"}
            </button>

            <p className='font-200 py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already Registered SignIn Now" }</p>
        </form>
    </div>
  )
}

export default Login

// 1.7hr