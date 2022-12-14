import React from "react";


class Card  extends React.Component {
    render() {
        return (
        
            <div className="card">
                    <img src={this.props.cardImg} className="card-img-top border" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updateTime}</small></p>
                    </div>
                  </div>

        )
    }
}
  

export default Card;


