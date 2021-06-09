import React, { Component } from "react";
import Card from "./card";

class AllCards extends Component {
  state = {
    cards: [this.props.cardsList],
  };

  render() {
    this.state.cards = this.props.cardsList;
    return (
      <div>
        {this.state.cards.map((card) => (
          <Card
            key={card.id}
            cardNum={card.cardNum}
            cardOwner={card.cardOwner}
            cardMM={card.cardMM}
            cardYY={card.cardYY}
            cardCVV={card.cardCVV}
          />
        ))}
      </div>
    );
  }
}

export default AllCards;
