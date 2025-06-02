import { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (<>
    <div className="text-blue-400">Welcome! Here to sign you up!</div>
  </>);
}