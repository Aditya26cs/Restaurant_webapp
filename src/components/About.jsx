// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props); // Fixing the call to super by passing props correctly
    // console.log("parent-constructor");
  }

  componentDidMount() {
    // console.log("parent-mount");
  }
  // we can make the componentdidmount function async but not in case of callback function in useEffect

  render() {
    // console.log("parent-render");
    return (
      <div>
        <h1>This is the About page</h1>
        <Profile name={"adityaClass"} />
        {/* <Outlet context={{ name: "Aditya Maheshwari" }} /> */}
        {/* <FunctionalProfileComponent name={"aditya"} /> */}
      </div>
    );
  }
}

export default About;
