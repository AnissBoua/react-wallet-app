import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card-Div d-flex flex-column justify-content-between bg-primary m-2 p-4">
        <p className="m-0">{this.props.cardNum}</p>
        <div className="d-flex justify-content-between">
          <div>
            <p className="m-0">{this.props.cardOwner}</p>
            <div className="d-flex">
              <p className="m-0">{this.props.cardMM}</p>
              <p className="m-0">/</p>
              <p className="m-0">{this.props.cardYY}</p>
            </div>
          </div>
          <p className="align-self-end m-0">{this.props.cardCVV}</p>
        </div>
      </div>
    );
  }
}

export default Card;
