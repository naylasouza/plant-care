import React, { Component } from "react"

class CardImage extends Component {
    render(){
        return(
            <div>
            <img src={this.props.image}/>
            </div>
        )
    }

}
export default CardImage