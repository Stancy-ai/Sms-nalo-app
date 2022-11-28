import React, {useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form"

function Log() {
    const [response, setResponse] = useState("")
    const{ register , handleSubmit, formState: { errors }  } = useForm();
    const onSubmit = data => {
    const url = `https://sms.nalosolutions.com/smsbackend/clientapi/Resl_Nalo/send-message/?username=${data["username"]}&password=${data["password"]}&type=0&dlr=1&source=${data["sender"]}&destination=${data["destination"]}&message=${data["message"]}&typeof=${data["typeof"]}`;
    axios.get(url).then((response) => {
      setResponse(response.data);
    })
   };
   
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="log">
            
            <div>{response}</div>
            <div className="field">
               <label>Username :</label>
               <input {...register('username', { required: true })} />
               {errors.username && <p  style={{ color: "red" }}>username is required.</p>}
            </div>
            <div className="field">
               <label>Password :</label>
               <input {...register('password', { required: true })} />
               {errors.password && <p  style={{ color: "red" }}>password is required.</p>}
            </div>
            <div className="field">
               <label>Sender ID :</label>
               <input {...register('sender', { required: true })} />
               {errors.sender && <p  style={{ color: "red" }}>source is required.</p>}
            </div>
            <div className="field">
               <label>Destination :</label>
               <input {...register('destination', { required: true })} />
               {errors.destination && <p  style={{ color: "red" }}>destination is required.</p>}
            </div>
            <div className="fields">
               <p>Choose the type of sms you are about to send.</p>
               <input type="radio" value="0"  {...register("typeof", { required: true })}/>
               <label>Flash</label>
               <input type="radio" value="1" {...register("typeof", { required: true })}/>
               <label>Text message</label>
               {errors.typeof && <p  style={{ color: "red" }}>type of message is required.</p>}
            </div>
            <div className="field">
               <label>Message</label>
               <textarea name="message" {...register('message', { required: true })}/>
               {errors.message && <p  style={{ color: "red" }}>message is required.</p>}
            </div>
            <button id="btn">button</button>
         </div> 
      </form>

    );
    }
  
  export default Log;



// import { useForm } from 'react-hook-form';

// function Log() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input {...register('firstname')} />
//       <input {...register('lastName', { required: true })} />
//       {errors.lastName && <p>Last name is required.</p>}
//       <input {...register('age', { pattern: /\d+/ })} />
//       {errors.age && <p>Please enter number for age.</p>}
//       <input type="submit" />
//     </form>
//   );
// }
   
// export default Log;