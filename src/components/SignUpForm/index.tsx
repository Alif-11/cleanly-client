import { useState } from 'react'
import './SignUpForm.css'

export default function SignUpForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (<>
    <div>Welcome!</div>
  </>);
}