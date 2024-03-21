import React from "react";

class UserClass  extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        count : 0,
    };
}
//  console.log(props);
    

    render() {
        const {name, location } = this.props;
        return( <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact Info: "34546"</h4>
    </div> 
    );

    }
}

export default UserClass;