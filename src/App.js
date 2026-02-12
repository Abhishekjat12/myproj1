import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };
  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (!formData.username) {
      tempErrors.username = "Email is required";
    } else if (!emailRegex.test(formData.username)) {
      tempErrors.username = "Invalid email format";
    }
    
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (!passRegex.test(formData.password)) {
      tempErrors.password = "Password invalid format";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Login Success!");
    }
  };
  return (
    <div className="App">
      <div className="header">
        <div className="box-model-a">
          <div className='box-model'>
            <div className='abhi'>
              <h1>Welcome!</h1>
              <p>Create your account for free</p>
            </div>
            <div />
            <div className='sign-a'>
              <button className="sign" type="button">Sign Up</button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-a">
              <label htmlFor="username">Phone/Email address*</label>
              <input
                className="sign"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.username && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.username}</p>}

              <label htmlFor="password">Password*</label>
              <input
                className="sign"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.password}</p>}
            </div>

            <button className="sign" type="submit">Sign In</button>
            <a className="forgot" href="https://www.google.com" target="_blank" rel="noreferrer">Forgot password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
