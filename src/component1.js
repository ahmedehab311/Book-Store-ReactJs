import React, { Component, useState } from "react";



class component1 extends Component {

constructor(props) {
    super(props);
    this.state = {
        name:"ahmed",
    }
    console.log("constructor from1")
}
static getDerivedStateFromProps(props,state) {
    console.log("getDerivedStateFromProps from1")
    return null;
}

componentDidMount() {
    console.log("componentDidMount from1")
}
render() {
    console.log("render from1")
return <div>component1</div>
}

}
export default component1;
