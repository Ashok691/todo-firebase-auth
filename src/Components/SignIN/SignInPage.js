import React from 'react'
import './SignIn.css'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../../Firebase/firebase'
import {useNavigate} from 'react-router-dom'

function SignInPage() {

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const signIn = () =>{
    signInWithPopup(auth, provider)
    .then(auth => {navigate('/TodoListPage')})
    .catch(error => console.log(error))
  }
  return (
    <div className='main-container'>
      <div className='signin-header'>
        <header>Welcome to your todo plans</header>
      </div>

      <div className='main-background'>
        <div className="background-left">
          <div className='card-left'><span>Planning</span> <br/> <span> makes everybody</span> <br/> <span>perfect</span> </div>
        </div>
        <div className='background-right'>
          <div className='card-right'>
            <button onClick={signIn} className = 'google'>Tap to Enter</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SignInPage