import React from 'react'
import { render } from '@testing-library/react'

class todo extends React.Component{
    constructor(){
        super()
        this.state={
            count: 0
        }

        function handleChange() {
            this.setState(prevState => {
                return {
                    count: "prevState.count + 1"
                }

            })
        }
        
    }
    render(){
        return(
            <div>
                <button onClick= {this.handleChange}>Change</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
    
}
export default todo;