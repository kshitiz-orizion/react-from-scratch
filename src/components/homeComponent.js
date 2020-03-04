import React,{useState} from 'react';

const Home=(props)=>{
    const [count,setCount]=useState(0);

    const increament=()=>{
        setCount(count+10);
    }
    return(
        <React.Fragment>
            <div>{count}</div>
            <button onClick={()=>increament()}>{props.value}</button>
        </React.Fragment>

    )
}

export default Home;