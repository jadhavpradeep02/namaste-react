import React from "react";
//import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log("Parent Component Did Mount");
    }

    render() {
        return (
            <div className="about">
                <h1>About us</h1>
                {/* <User name={"John Doe"} location={"Netherlands"} contact={"0987654321"} /> */}

                {/* <UserClass name={"John Doe"} location={"Netherlands"} contact={"0987654321"} /> */}

                <UserClass name={"Paddy Selva"} location={"Germany"} contact={"09876522222"} />
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div className="about">
//             <h1>About us</h1>
//             {/* <User name={"John Doe"} location={"Netherlands"} contact={"0987654321"} /> */}

//             <UserClass name={"John Doe"} location={"Netherlands"} contact={"0987654321"} />
//         </div>
//     )
// }

export default About;
