import React, { Component } from "react";
import "./app1.css";
import "tachyons";
// import {Robot} from "./robot";
import CardList from "../component/cardList";
import SearchBox from "../component/searchBox";
import Scroll from "../component/scroll";
import ErrorBoundary from "../component/errorBoundary";

class App1 extends Component {
  constructor() {
    super();
    this.state = {
      Robot: [], // this.state will ensure that we can make changes to the Robot
      searchField: "",
    };
    console.log("constructor");
  }

  /* <h1>Messi is the GOAT</h1> 
    <Hello greeting1 = {"person"}/> {/* greeting1 is a prop  */
  /* <App/>  */
  /* <Robots id = {details[2].id} 
            name = {details[2].name} 
            email = {details[2].email}/>
    <Robots id = {details[1].id} 
            name = {details[1].name} 
            email = {details[1].email}/>
    <Robots id = {details[0].id} 
            name = {details[0].name} 
            email = {details[0].email}/> */

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Robot: users }));
    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value }); //  target.value ensures that the value that we type gets printed in the console window
    // const filterRobots = this.state.Robot.filter(Robot=>{
    //         return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    // })
  };

  render() {
    const filteredRobots = this.state.Robot.filter((Robot) => {
      return Robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    console.log("render");
    return (
      <div className="tc body">
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll className="parent-container">
          <ErrorBoundary>
            <CardList Robot={filteredRobots} />
          </ErrorBoundary>
        </Scroll>{" "}
        {/* Normally, we would have written Robot={Robot} in order to get the details of cards. But we are using "this.state.Robot"
                                                   now becauase we are trying to acces Robot from the constructor instead of from the imports now because we want to use 
                                                   state. */}
      </div>
    );
  }
}

export default App1;
