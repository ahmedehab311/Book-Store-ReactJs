import React, { Component, useState } from "react";


class component2 extends Component {

constructor(props) {
    super(props);
    this.state = {
        name:"ahmed",
    }
    console.log("constructor from2")
}
static getDerivedStateFromProps(props,state) {
    console.log("getDerivedStateFromProps from2")
    return null;
}

componentDidMount() {
    console.log("componentDidMount from2" )
}
shouldComponentUpdate(nextProp, nextState) {
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState) {
    return null;
}
componentDidUpdate(){
    
}
render() {
    console.log("renderfrom2")
return <div>component2</div>
}

}
export default component2;
