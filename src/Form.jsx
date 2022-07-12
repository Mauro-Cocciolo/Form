import React from 'react';
import "./Form.css"
import "./formulario.png"


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Quaeso, hoc triste et vacuum imple... ';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Mmm... e-mail recte dicis? ';
  }
  if (!input.password) {
    errors.password = 'Heus tu! hic scribe aliquid!';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'heus! password debet habere numerum';
  }
  return errors;
};

export default function  Form() {
  /*const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')*/

    const [input, setInput] = React.useState({
      username: '',
      password: '',
    });
    const [errors, setErrors] = React.useState({});
    
    const handleInputChange = function(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

  return (
    <form>
      <div className='cont'>
        <label>Username:</label>
        <input className={errors.username && 'danger'} 
        value={input.username}
        type="text"
        name="username" 
        onChange={handleInputChange} 
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div className='cont'>
        <label>Password:</label>
        <input className={errors.password && 'danger'} 
        value={input.password}
        type="password" 
        name="password" 
        onChange={handleInputChange} 
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <img className='im' src='../formulario.png' alt='imagen'/>
    </form>
  )
}
