import { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (<>
    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  </>);
}