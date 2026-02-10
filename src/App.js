
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="boxmodel1">
        <div className='boxmodel'>
          <div className='abhi'>
        <h1>Welcome!</h1>
        <p>Create your account for free</p>
        </div>
        <div/>
        <div className='abhi2'>

        <button className="sign"type="Sign Up">Sign Up</button>
        </div>
      </div>
      
        <form>
          <h2>Login</h2>
          <div className="form1">
           
            <label htmlFor="username" required>Username/Email address*</label>
            
            <input className="sign" type="text" id="username or Email" name="username" required />
         
            <label htmlFor="password">Password*</label>
            <input className="sign" type="password" id="password" name="password" required />
          </div>
          <button className="sign" type="submit">Sign Up</button>
          
          <a className="forgot" href="https://www.google.com" target="_blank">Forgot password?</a>
        </form>
      </div>
    </div>
    </div>
  
  );

}

export default App;
