import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    setCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <React.Fragment>
            <div>Count Test:{this.state.count}</div>
            <button onClick={()=>this.setCount()}>{this.props.value}</button>
            </React.Fragment>
        )
    }
}

export default Test;