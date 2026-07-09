import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {
                name: "dummy",
                location: "dummy"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/jadhavpradeep02");
        const jsonData = await data.json();
        this.setState({ userData: jsonData });
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        const { name, location } = this.state.userData;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 122y8982798278</h4>
            </div>
        );
    }
}

export default UserClass;
