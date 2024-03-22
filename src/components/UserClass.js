import React from "react";

class UserClass  extends React.Component{
    constructor(props){
    super(props);

    // this.state = {
    //     count : 0,
    //     count2 : 2,
    // };
    // console.log(this.props.name + "child Constructor");

this.state = {
    userInfo : {
        name : "dummy",
        location: "Default",
        avatar_url:"https://dumm-photo.com",

    },
};

}
 
 async componentDidMount(){
    // console.log(" Child component did mount");
    //API call

    const data = await fetch (  "https://api.github.com/users/akshaymarch7");
    const json=await data.json()
    // console.log(json); 

    this.setState({
        userInfo : json,
    });
    console.log(json);
}

render() {
        // const {name, location } = this.props;
        // const{count} = this.state;

    //    console.log( this.props.name + "Child Render");
    const{name, location,avatar_url} = this.state.userInfo;
        return( <div className="user-card">
          
            {/* <h1> Count: {count}</h1> */}
            {/* <h1> count2: {count2}</h1> */}
            {/* <button onClick={()=> {
                  this.setState({
                     count: this.state.count + 1,
                });
            }}
            > Count Increses </button> */}

        {/* <h2>Name: {this.props.name}</h2> */}
        
       
        <img src = {avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact Info: "34546"</h4>
    </div> 
    );

    }
}

export default UserClass;