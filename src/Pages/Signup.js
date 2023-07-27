import React, { useState} from 'react';
import Signup from '../Components/Signup/Signup';

function SignupPage() {
  const [theme, setTheme] = useState('light')
  
  setTheme('dark')

  return (
    <div>
      <Signup theme={theme} />
    </div>
  );
}

export default SignupPage;
