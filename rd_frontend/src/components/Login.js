import React from 'react'

function Login() {
  return (
    <>
      <div className='container'>
        <div className='row py-2 '>
            <div className='col-2'>Email:</div>
            <div className='col-10'><input className='form-control' type='email' placeholder='enter email' value={email} onChange={changeEmail}></input></div>
        </div>
        <div className='row'>
            <div className='col-2'>Password:</div>
            <div className='col-10'><input className='form-control' type='password' placeholder='enter password' value={password} onChange={changePassword}></input></div>
        </div>
        <button type='submit'>Login</button>
      </div>
    </>
  )
}

export default Login
