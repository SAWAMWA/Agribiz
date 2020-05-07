import React from 'react'
import App from './App'

class App2 extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(previousState =>{
            return {
                isLoggedIn: !previousState.isLoggedIn
            }
        })
    }
    render(){
        let buttonText= this.state.isLoggedIn ? 'LOG OUT':'LOG IN'
        let displayText = this.state.isLoggedIn ? 'Logbabe he Out': 'Logged In'
        return(
         <div>
             <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
        </div>
        )
    }

}
export default App2