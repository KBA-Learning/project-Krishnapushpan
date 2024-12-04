import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import logo from '../assets/images/carl.png'
import backimg from '../assets/images/car1.jpg'
const Login = () => {
  const [username,setusername]= useState('');
  const [password,setPassword]= useState('');
  const navigate=useNavigate();
  const loginSubmit =async (e) =>{
      e.preventDefault();
      const loginDetails= {
          username,
          password,
      };
      const res =await fetch('/api/login',{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(loginDetails),
          credentials:'include',

      })
      if(res.ok){
          const data =await res.json();
          localStorage.setItem('username',username);
        alert(`logged in as  ${data.userType}`)
          navigate('/home');
      }
      else{
         alert('Please check your credentials');
      }
  }
  return (
    
     <><div className="bg-[url('/images/car1.jpg')] bg-cover" style={{backgroundImage:`url(${backimg})`}}>
     <div className="flex" >
          <div className="font-bold text-5xl  ml-[50px] mt-[25px] text-white">CARGO</div>&nbsp;&nbsp;
          <div><img className="h-[65px] mt-[20px] ml-[30px] " src={logo} alt=""/></div>
      </div>
      <br />
     <br/>
   
  <form
    onSubmit={loginSubmit}
    className=" ml-[100px] w-[350px] p-6 bg-white rounded-lg shadow-md"
  >
    <h1 className="text-2xl font-bold text-center text-blue-600">Login</h1>

    <div className="mt-6">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
        placeholder="Enter your username"
      />
    </div>

    <div className="mt-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
        placeholder="Enter your password"
      />
    </div>

    <div className="flex items-center  justify-between mt-6">
      <button
        type="submit"
        className="px-4 py-2 w-[300px]  text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
     
    </div>

    <p className="mt-6 text-center text-sm text-gray-600">
      Don't have an account?{' '}
      <Link to="/Signup" className="text-blue-600 hover:underline">
        Sign Up
      </Link>
    </p>
  </form>



<div>
 <br/> 
 <br/>
 <br/>
 <br/>
 <br/>
</div>
</div>
</>
  )
}

export default Login