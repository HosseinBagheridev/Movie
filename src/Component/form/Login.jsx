import React from 'react'

import { SignUp } from './SignUp'

export const Login = () => {
  return (
    <div>
        <SignUp mode="login" showUsername={false} showConfirmPassword={false}/>
    </div>
  )
}
