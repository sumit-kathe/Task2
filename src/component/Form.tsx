import { useState } from "react";
import "./Form.css";

const Form = () => {
  const eduavtion = ["BA", "BCom", "BSC", "BCA", "BE", "LLB"];

  const option = eduavtion.map((e) => {
    return <option>{e}</option>;
  });

  const [Fname, setFname] = useState("");
  const [Mname, setMname] = useState("");
  const [Lname, setLname] = useState("");
  const [gender, setgender] = useState("");
  const [Qualification,setQualification] = useState("");
  const [dob,setdob]=useState<string>();
  const [exp,setexp]=useState("");
  const [skill, setskill] = useState([""]);
  const [words, setwords] = useState("");
  const [open,setopen] = useState(false)

  var info = {
    firstname: Fname,
    middlename: Mname,
    lastname: Lname,
    Qualification2:Qualification,
    DOB:dob,
    Experience:exp,
    gender: gender,
    skills:skill,
    whAT_do_you_think:words,
  };

  const [detail, setdetail] = useState(info);

  const submiitform = () => {
    console.log("detail of emploee", info);

    return <></>;
  };

  const storingskill=(e:any)=>{

    const {value,checked} = e.target
    console.log("value of checkboc" ,value)
    console.log("checked or  not", checked )

     // setopen(false)
       
    if(value==="Other"){

      setopen(true)



    }
    
    if(checked){

      setskill([...skill,value])

    }
    else{


      setskill(skill.filter((e)=>
        
        e !== value)

      
    // setskill(skill.filter(value))

    )
    

  }
}
   
  return (
    <>
      <div className="maindiv">
        <h1>Employment Form</h1>
        <div>
          👉 <input className="inputfild"
            type="text"
            required
            value={Fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            placeholder="Enter Your First Name "
          />
        </div>

        <div>
        👉<input className="inputfild"
            type="text"
            required
            value={Mname}
            onChange={(e) => {
              setMname(e.target.value);
            }}
            placeholder="Enter Your Middle Name "
          />
        </div>

        <div>
        👉<input className="inputfild"
            type="text"
            required
            value={Lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            placeholder="Enter Your Last Name "
          />
        </div>

        <div>
        👉<input
            type="radio"
            name="gender"
            value="male"
          onChange={(e) => setgender(e.target.value)}
          />
          Male
          <input type="radio" name="gender" value="Female"  onChange={(e) => setgender(e.target.value)}  />
          Female
          <input
            type="radio"
            name="gender"
            value="Don't Wants To Disclose "
          onChange={(e) => setgender(e.target.value)}
          />
          Don't Wants To Disclose
          
        </div>
        <div>👉
          <label>
            Select Your Date Of Birth
            <br></br>
            <input className="inputfild" type="date"  onChange={(e) => setdob(e.target.value)} />
          </label>
        </div>

        <div>👉
          <label>Select Your Highest Qualification</label>
          <select className="quali"  onChange={(e) => setQualification(e.target.value)} required> {option}</select>
        </div>
        <div>👉
          {" Skils"}
          <div className="row">
            <label>
              HTML
              <input type="checkbox"  value="HTML" onChange={e=>storingskill(e)}/>
            </label>
            <label>
              CSS
              <input type="checkbox"  value="CSS" onChange={(e)=>storingskill(e)} />
            </label>
            <label>
              BOOtstarp
              <input type="checkbox"  value="BootStrap" onChange={(e)=>storingskill(e)} />
            </label>
            <label>
              Java Script
              <input type="checkbox"  value="Java Script" onChange={(e)=>storingskill(e)}/>
            </label>
            <label>
              React Js
              <input type="checkbox"  value="React JS" onChange={(e)=>storingskill(e)} />
            </label>
            <label>
              TypeScript
              <input type="checkbox"  value="TypeScript" onChange={(e)=>storingskill(e)} />
            </label>
            <label>
              Other
              <input type="checkbox"  value="Other" onChange={e=>storingskill(e)} />
            </label>
            {open === true ? <input type="textarea" placeholder="Write your skills here"/> : <p>Write</p>}
          </div>
        </div>
        <div>👉
          <label>Year of Experience</label><br/><br/>

          <input className="inputfild" type="number" onChange={(e) => setexp(e.target.value)}  placeholder="0" />
        </div>
        <div>👉
          <label>Uplod YOur Resume</label><br/><br/>

          <input type="file" />
        </div>
        <div>👉
          <label>Express yourself in 100 Words</label><br></br><br/>
          <textarea className="what" name="textarea" rows={5} cols={30} onChange={(e) => setwords(e.target.value)} >Write something here</textarea>
        </div>
        <div>👉
          <label>Terms & Condition </label>

          <input type="checkbox" required />
        </div>

        <div>
          <button className="btn"
            type="button"
            onClick={() => {
              submiitform();
            }}
          >
            Submmit Form
          </button>
        </div>
      </div>
      <div className="detail">
      <h4>Your details</h4>

      <ol>
        <li>First Name : {info.firstname}</li>
        <li>First Name : {info.middlename}</li>
        <li>First Name : {info.lastname}</li>
        <li>Gender: {info.gender}</li>
        <li>QUlification : {info.Qualification2}</li>
        <li>Eyear of Experienece : {info.Experience}</li>
        <li>Your self : {info.whAT_do_you_think}</li>
        <li>Skill : {info.skills}</li>
      </ol>
    </div>


    </>
  );
};

export default Form;
