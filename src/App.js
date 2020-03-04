import React from 'react';
import Test from './components/testComponent';
import Home from './components/homeComponent';
class App extends React.Component{
    render(){
        return (
            <div>
                <Test value="propsTest"/>
                <Home value="propsHome"/>
            </div>
        )
    }
}

export default App;