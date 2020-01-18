import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1;
    return this.props.opacity > 10 ? null : (
      <div className="color-box" style={{opacity: 2}}>   //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
        {this.props.opacity - 0.1}
      </div>
    )
    // return (
    //   <div className="color-box" style={{opacity: 2}}>   //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
    //     {this.props.opacity}
    //   </div>
    // )
  }

}
