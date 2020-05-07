import React from 'react';

class App extends React.Component{
constructor(){
    super()
    this.state ={
        isLoggedin: false
    }
}
    render(){
        let message
        if (this.state.isLoggedin===true) {
            message ='You are logged in'
        } else {
            message ='You are not logged in HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
        }
        return(
            <h1>{message}</h1>
        )
    }

}


export default App;


