import React from 'react'

export class Count extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    add(){
        this.setState({
            count: this.state.count + 1
        })
    }
    remove(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
          <>
              {console.log( this.state.count)}
              <button onClick={this.add.bind(this)}>+</button>
              <button onClick={this.remove.bind(this)}>-</button>
          </>
        );
    }

}