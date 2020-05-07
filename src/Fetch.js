import React from 'react'

class App3 extends React.Component{

    constructor(){
        super()
        this.state ={
            chracter:{}
        }
    }
        //Fetch data from external API
    componentDidMount(){
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    chracter:data
                })
            })
    }
    render(){
        return(
        <h1>{this.state.chracter.name}</h1>
        )
    }


}

export default App3