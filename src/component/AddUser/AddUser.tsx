import { useRef, useState } from "react"
import './AddUser.css' 
import axios from "axios";


const AddUser: React.FC<{
    getAllUserAxios: () => void
}> = (
    {
        getAllUserAxios
    }
) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passRef:any = useRef();

    const AddnewUser =() => {
        console.log('passref', passRef)
        const newUser ={
            email,
            password,
            id: Math.random(),
            date: new Date()
        }
        console.table (
            newUser
        )
        axios({
            method: 'post',
            url: 'http://localhost:3001/add',
            data: newUser
          }).then(
            res => {
                console.log('add res' , res)
                getAllUserAxios()
            }
          ).catch(err => {
            console.log('add err', err)
          });
          
        setEmail('');
        setPassword('')
    }

    const showPassword = ()=> {
        if (passRef.current){
            if(passRef.current.type == 'password'){

                passRef.current.type= 'text'
            }else{
                passRef.current.type= 'password'
            }
            
        }
    }
    return (
    <div className="from-group">
        <h1> Add new User</h1>
        <div className="form-control">
            <label htmlFor= "email"> Email :-</label>

            <input 
            type = "text" 
            id= "email" 
            value = {email} 
            onChange= {e => setEmail(e.target.value)}/>

        </div>
        <div className="form-control">
             <label htmlFor="password" > Password :- </label>
             
             <input 
             id="password"
            type = "password "
             value = {password} 
             ref= {passRef}
             
             onChange= {e => setPassword(e.target.value)} 
               
             />
             <button className="eye" onClick={showPassword}> eye</button>
             
             <br/>
             <button className="form-btt" onClick={AddnewUser}> Add</button>
        </div>
  </div>


    )
}
export default AddUser;