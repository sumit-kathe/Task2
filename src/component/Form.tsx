
import { useState } from 'react';
import './Form.css'

const Form =()=>{

       const eduavtion=["BA","BCom","BSC","BCA" ,"BE","LLB"]

       const option = eduavtion.map((e)=>{

        return(
            <option>{e}</option>
        )
    })

    const [sub,setsub] = useState("");


    const [Fname, setFname] =useState("")
    const [Mname, setMname] =useState("")
    const [Lname, setLname] =useState("")
    const [gender, setgender] =useState("")



    const submiitform = ()=>{

        console.log(Fname )
        console.log(Mname )
        console.log(Lname )
        setsub("ok")

        return(

           <></>

        )
    }


  const dataok =  <div><h4>Your details</h4>
              
              <ul>
                    <li>First Name {Fname}</li>
                    <li>First Name {Mname}</li>
                    <li>First Name {Lname}</li>
                    

            </ul>


           </div>

    return(

        <><div className="maindiv">

        <h1>Employment Form</h1>
        <div>
            <input type="text" value={Fname} onChange={(e)=>{setFname(e.target.value)}} placeholder="Enter Your First Name " />
        </div>
          
        <div>
            <input type="text" value={Mname} onChange={(e)=>{setMname(e.target.value)}}  placeholder="Enter Your Middle Name "/>
        </div>

        <div>
            <input type="text"  value={Lname} onChange={(e)=>{setLname(e.target.value)}}  placeholder="Enter Your Last Name "/>
        </div>

        <div>

            <input type="radio" />Male
            <input type="radio" />Female
        </div>
        <div>
            <label>Select Your Date Of Birth
                <br></br>
            <input type="date"  placeholder="Enter Your LAst Name "/>
            </label>
        </div>
 

                <div>
                         <select> Select Your Highest Qualification
                            {option}
                        
                         </select>


                </div>
 


        <div>
            <button type="button" onClick={()=>{submiitform()}}>Submmit Form</button></div>

        </div>

        {sub==="ok" ? {dataok} : ""}
      
        </>
    )
}

export default Form ;