import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase.';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null); // it takes a initial value 
  const password = useRef(null);

  const handleButtonClick = () =>{
    // Validate the Form Data 
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // console.log(message);
    if(message) return;

    // SignIN || Sign Up Logic 
    if(!isSignInForm){
      // SignUp Logic 
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // update the User 
          updateProfile(auth, {
            displayName:name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({uid : uid, email : email, displayName : displayName, photoURL: photoURL})
            );
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          
            console.log(user);
            navigate('/browse');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" +errorMessage)
          });

    }else{
      // Sign In Logic 
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          console.log(user)
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode == 'auth/invalid-credential'){
            let message = 'Invalid Credential .. Plz Try Again....';
            setErrorMessage(message);
          }
          
        });
    }

  };

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        {/* Body Image  */}
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='NETFLIX'/>
        </div>

        <form 
          onSubmit={(e) => e.preventDefault()}
          className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

             {
                !isSignInForm && 
                <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 w-full  bg-gray-700'/>
             }

            <input  
              ref={email}
              type='text' 
              placeholder='Email Address' 
              className='p-2 my-2 w-full bg-gray-700'
            />
            <input  
              ref={password}
              type='password'
              placeholder='Password'
              className='p-2 my-2 w-full  bg-gray-700'
              />

              <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "SignUp"}
            </button>

            <p className='font-200 py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already Registered SignIn Now" }</p>
        </form>
    </div>

  )};

export default Login

// 2.00 hr