import { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (<>
    <input className="rounded border border-gray-300 mb-4 text-center" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input className="rounded border border-gray-300 mb-4 text-center" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <input className="rounded border border-gray-300 mb-2 text-center" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    <button type="submit" className="rounded bg-blue-500 text-white p-2">Sign Up</button>
  </>);
}