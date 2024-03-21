import User from "./User";
import UserClass from "./UserClass";
const About =()=> {
    return (
        <div>
           
              <h1> About Page </h1>
              <UserClass name= {"User Name  {class} "}/>


              <User name= {"User Name  {function} "}/>
        </div>
    
    );
};
export default About;