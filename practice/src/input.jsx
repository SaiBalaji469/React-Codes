import { useState } from "react"

export default function Input(){
    let [formData , setFormdata] = useState({
        firstName : "",
        userName : "",
    });

    // function updater(event){
    //     console.log(event.target.value)
    // }
    // function getName(event){
    //     console.log(event.target.value);
    // }
    function handleInput(event){
        // console.log(event.target.name); 
        
        setFormdata((prevData) =>{
            return {...prevData, [event.target.name]: event.target.value}
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        setFormdata({
            firstName : "",
            userName : "",
        });
        console.log(formData);

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="Enter your fullname" 
                 value={formData.firstName} 
                 onChange={handleInput}
                 name="firstName"/>
             

                <input type="text"
                 placeholder="Enter your username" 
                 value={formData.userName} 
                 onChange={handleInput}
                 name="userName"/>

                <button>Submit</button>
            </form>
        </>
    )
};