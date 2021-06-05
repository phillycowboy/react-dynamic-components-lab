import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {if(this.props.opacity >= 0.2){
          return(<div className="color-box" style={{this.props.opacity - 0.1}}>

          </div>)
        }elsif(this.props.opacity < 0.2){
          return(null)
        }
        }
      </div>
    )
  }

}

