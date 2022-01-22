import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    setShowPassword: ''
  })
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = () => {

  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form>
          <input type="email"
                 className="emailInput"
                 placeholder="Email"
                 id="email"
                 value={email}
                 onChange={onChange}/>
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'}
                   className="passwordInput"
                   placeholder="Password"
                   id="password"
                   value={password}
                   onChange={onChange}/>
            <img src={visibityIcon}
                 alt="show password"
                 className="showPassword"
                 onClick={() => setShowPassword(prevState => !prevState)}/>
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
        </form>

      </div>
    </>
  )
}

export default SignIn