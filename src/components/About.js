
import User from "./UserClass";
import UserClass from "./UserClass";
import { Component } from "react";

//function component
// const About =()=> {
//     return (
//         <div>
           
//               <h1> About Page </h1>
//               <UserClass name= {"User Name  {class} "}/>


//               <User name= {"User Name  {function} "}/>
//         </div>
    
//     );
// };
// export default About;

//Class Component

class About extends Component{
    constructor (props){
        super(props);
        console.log("Parent Constructor call....");
    }
    
componentDidMount(){
    console.log("Parent component did mount .. ")
}

render(){
        console.log("Parent Render");
 return (
    <div> 
        <h1>About Class Component</h1>
        <h2>This is React Series</h2>
        {/* <UserClass name = {"React Tutorial (classes)"} location={"Dehradun "}/>
        < UserClass name = {"second"} location ={"Us"}/> */}
<UserClass name = {"Third"} location = {"US"}> </UserClass>
        
    </div>
 );
    
}
    
}
export default About;