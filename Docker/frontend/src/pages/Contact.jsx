import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import backimg from '../assets/images/carb.jpg'
const Contact = () => {
    const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [mobileno, setMobileno] = useState('');
  const[message,setMessage]=useState('');
  const navigate = useNavigate();
   const MessageSubmit = async (messages) =>{
      const res =await fetch (`/api/message`,{
          method: 'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(messages),
      });
      if(res.status===201){
          // toast.success('User created successfully');
          alert('Message sent successfully')
          window.location.reload()
      }
      else if(res.status===403){
        alert("username is not same as you logged in")
      }
      else{
          alert('Message not sent');
         
      }
   }
   const submitForm=(e)=>{
      e.preventDefault();
      const messages={
          username,
          message,
          mobileno,
          emailid
      };
      MessageSubmit(messages);

   }
  return (
   <div  className='bg-cover' style={{backgroundImage:`url(${backimg})`}}>
     <div id="main" className=" py-[50px] ml-[20px] flex gap-16">
    <div className="h-[480px] w-[350px] rounded bg-[#ccd7fd]/50">
        <p className="text-[#003066] text-2xl font-bold text-center pt-8">Contact US</p>
        <div className="flex ml-8 mt-8  font-bold">
            <div ><img className="h-6 " src="images/location.png" alt=""/></div>
            <div><p className="text-[#003066] text-sm">Address</p></div>
        </div>
        <p className="text-sm text-[#003066] ml-10 mr-8 mt-4">Lorem ipsum dolor sit amet consectetur rem non aut, eveniet error consequuntur totam!</p>
        <hr className="border border-[#003066] ml-8 mr-2  mt-4"/>
        <div className="flex ml-8 mt-4  font-bold">
            <div ><img className="h-6 " src="images/mail.png" alt=""/></div>
            <div><p className="text-[#003066] text-sm">Email Id</p></div>
        </div>
        <p className="text-sm text-[#003066] ml-10 mr-8 mt-4">Cargo@gmail.com</p>
        <hr className="border border-[#003066] ml-8 mr-2  mt-4"/>
        <div className="flex ml-8 mt-8  font-bold">
            <div ><img className="h-6 " src="images/phone.png" alt=""/></div>
            <div><p className="text-[#003066] text-sm">Mobile No</p></div>
        </div>
        <p className="text-sm text-[#003066] ml-10 mr-8 mt-4">
            +91 9998 389 867 <br/>+91 8723 445 349 <br/>+91 9565 766 877
        </p>
    </div>
    <div className="w-[340px]">
        <p className="text-center text-4xl font-bold mt-[80px] text-[#003066]">
            Call us for further information. <br/> Cargo customer care is here to help you anytime.

        </p>
    </div>

                <div className="h-[480px] w-[350px] rounded bg-[#ccd7fd]/50">
                    <form action="" onSubmit={submitForm}>
                    <br/>
                    <p className="text-[#003066] text-2xl font-bold text-center pt-2" >Contact Form</p>
                    <label className="text-[#003066] text-md ml-10" for="">UserName </label><br/>
                    <input className="h-[28px] w-[270px] ml-10 mt-[6px] mb-[6px] rounded placeholder:text-[12px] hover:bg-[#003066]/50" type="text" placeholder="  Enter your UserName"
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}/><br/>
                    <label className="text-[#003066] text-md ml-10 mt-[6px]" for="">Email Id </label><br/>
                    <input className="h-[28px] w-[270px] ml-10 mt-[6px] mb-[6px] rounded placeholder:text-[12px] hover:bg-[#003066]/50" type="text" placeholder="  Enter your Email id"
                     value={emailid}
                     onChange={(e)=>setEmailid(e.target.value)}/><br/>
                    <label className="text-[#003066] text-md ml-10 mt-[6px]" for="">Mobile </label><br/>
                    <input className="h-[28px] w-[270px] ml-10 mt-[6px] rounded placeholder:text-[12px] hover:bg-[#003066]/50"  type="text" placeholder="  Enter your Number"
                     value={mobileno}
                     onChange={(e)=>setMobileno(e.target.value)}/><br/>
                    <label className="text-[#003066] text-md ml-10 mt-[6px] mb-[6px]" for="Message">Message</label><br/>
                    <textarea name="" id=""  className=" w-[270px] h-[120px] mt-[6px] ml-10 rounded hover:bg-[#003066]/50" value={message}
                    onChange={(e)=>setMessage(e.target.value)}>
                    </textarea><br/>
                    <button className="bg-[#003066] ml-10 mt-2 h-[32px] w-[270px] text-white text-center rounded hover:bg-[#003066]/50">Send Message</button>
                    </form>
                </div>
</div>

   </div>
  )
}

export default Contact