import React, { Component } from "react";
import Card from "./card";
import AllCards from "./allCards";

class CardForm extends Component {
  state = {
    cardNum: "",
    cardOwner: "",
    cardMM: "",
    cardYY: "",
    cardCVV: "",
    cardsList: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex bg-dark p-5">
          <div className="">
            <AllCards cardsList={this.state.cardsList} />
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <form className="d-flex flex-column">
                <input
                  value={this.state.cardNum}
                  onChange={this.changeNum}
                  className="m-2"
                  type="text"
                  id="cardNumber"
                  placeholder="Enter card number"
                  maxLength="16"
                />
                <input
                  value={this.state.cardOwner}
                  onChange={this.changeName}
                  className="m-2"
                  type="text"
                  id="name"
                  placeholder="Enter name"
                />
                <div className="d-flex m-2">
                  <select
                    value={this.state.cardMM}
                    onChange={this.changeMM}
                    className="me-2"
                    name="expireMM"
                    id="expireMM"
                  >
                    <option value="">MM</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <p className="m-0">/</p>
                  <select
                    value={this.state.cardYY}
                    onChange={this.changeYY}
                    className="mx-2"
                    name="expireYY"
                    id="expireYY"
                  >
                    <option value="">YY</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </div>
                <input
                  value={this.state.cardCVV}
                  onChange={this.changeCVV}
                  className="m-2"
                  type="text"
                  id="secretCode"
                  placeholder="CVV"
                  maxLength="3"
                />
              </form>
              <Card
                cardNum={this.state.cardNum}
                cardOwner={this.state.cardOwner}
                cardMM={this.state.cardMM}
                cardYY={this.state.cardYY}
                cardCVV={this.state.cardCVV}
              />
            </div>
            <button
              onClick={this.createCard}
              className="bg-success rounded-3 border-0 px-4 py-2 "
            >
              Add Card
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  constructor() {
    super();
    this.changeNum = this.changeNum.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeMM = this.changeMM.bind(this);
    this.changeYY = this.changeYY.bind(this);
    this.changeCVV = this.changeCVV.bind(this);
  }

  changeNum(num) {
    this.setState({ cardNum: num.target.value });
  }
  changeName(name) {
    this.setState({ cardOwner: name.target.value });
  }
  changeMM(MM) {
    this.setState({ cardMM: MM.target.value });
  }
  changeYY(YY) {
    this.setState({ cardYY: YY.target.value });
  }
  changeCVV(CVV) {
    this.setState({ cardCVV: CVV.target.value });
  }
  createCard = () => {
    let cardNum = this.state.cardNum;
    let cardOwner = this.state.cardOwner;
    let cardMM = this.state.cardMM;
    let cardYY = this.state.cardYY;
    let cardCVV = this.state.cardCVV;

    this.setState({
      cardsList: this.state.cardsList.concat({
        cardNum,
        cardOwner,
        cardMM,
        cardYY,
        cardCVV,
      }),
    });
  };
}

export default CardForm;
