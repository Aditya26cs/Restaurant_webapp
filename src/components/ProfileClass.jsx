import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            userInfo : {
                name: "dev",
                location: "ghaziabad"
            }
        }

        console.log("children-constructor");
    }

    async componentDidMount() {
         
        // API call here
        const data = await fetch("https://api.github.com/users/Aditya26cs");
        const json  = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        })
        console.log("children-mount");
    }

    componentDidUpdate(){
        console.log("component did update")
    }
// componentDidMount call on initial render and componentDidUpdate call on every next render.
    render() {
        console.log("children-render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h1>Name: {this.state.userInfo.name}</h1>
                <h1>location: {this.state.userInfo.location}</h1>
                {/* <h1>Count: {this.state.count}</h1>
                <h1>Count2: {this.state.count2}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,  // Increment count
                            count2: this.state.count2 + 1, // Increment count2
                        });
                    }}
                >
                    Click Here
                </button> */}
            </div>
        );
    }
}


// first constructor is called and after that render .

// In a React class component, the constructor(props) is a special function that gets called when a component is created. It initializes the component's state and binds event handlers.

// super(props) calls the constructor of the parent class (React.Component), allowing access to this.props inside the constructor.

// Extends is used to inherit functionality from a parent class.
// Here, Profile inherits methods and properties from React.Component, allowing it to behave like a React component and utilize features such as state and lifecycle methods.

// In the render method, return some JSX which is rendered on the DOM.

export default Profile;
