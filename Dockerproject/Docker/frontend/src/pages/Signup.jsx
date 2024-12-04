import React ,{useState} from 'react'
import logo from '../assets/images/carl.png'
import backimg from '../assets/images/car1.jpg'
import { Link ,useNavigate} from 'react-router-dom'
const Signup = () => {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const[userType,setuserType]=useState('admin');
  const navigate = useNavigate();
   const signupSubmit = async (userDetails) =>{
      const res =await fetch (`/api/register`,{
          method: 'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(userDetails),
      });
      if(res.ok){
          // toast.success('User created successfully');
          alert('User created successfully')
          navigate('/');
      }
      // else if(res===404){
      //   console.log("try",error)
      // }
      else{
          alert('Error creating user');
         
      }
   }
   const submitForm=(e)=>{
      e.preventDefault();
      const userDetails={
          username,
          password,
          number,
          userType
      };
      signupSubmit(userDetails);

   }
  return (
    <><div className="bg-[url('/images/car1.jpg')] bg-cover" style={{backgroundImage:`url(${backimg})`}}>
   <div className="flex" >
        <div className="font-bold text-5xl  ml-[50px] mt-[20px] text-white">CARGO</div>&nbsp;&nbsp;
        <div><img className="h-[65px] mt-[15px] ml-[30px] " src={logo} alt=""/></div>
    </div>
    <br />
    <form
  onSubmit={submitForm}
  className="w-[350px] max-w-sm p-6 bg-white rounded-lg shadow-md ml-[100px]"
>
  <h1 className="text-3xl font-bold text-center text-blue-600">Sign Up</h1>

  <div className="mt-6">
    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
      Username
    </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
      placeholder="Enter your username"
    />
  </div>

  <div className="mt-6">
    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
      Mobile Number
    </label>
    <input
      type="text"
      id="mobile"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
      placeholder="Enter your number"
    />
  </div>

  <div className="mt-6">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm"
      placeholder="Enter your password"
    />
  </div>

  {/* <div className="mt-4">
    <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
      User Type
    </label>
    <select
      id="userType"
      name="userType"
      value={userType}
      onChange={(e) => setuserType(e.target.value)}
      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  </div> */}

  <div className="mt-6">
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
    >
      Sign Up
    </button>
  </div>

  <p className="mt-4 text-center text-sm text-gray-600">
    Already have an account?{' '}
    <Link to="/" className="text-blue-600 hover:underline">
      Login
    </Link>
  </p>
</form>

    <div>
 <br/> <br/> <br/>
</div>
 
    </div>
    </>
  )
}

export default Signup