import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      wasSelected: 0,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(props) {
    const { disabled } = this.props;
    const { selected, wasSelected } = this.state;
    if (!disabled) {
      this.setState(({ selected }) => ({ selected: !selected }));
      if (selected) {
        this.setState(({ wasSelected }) => ({ wasSelected: 1 }));
      }
      if (wasSelected > 0) {
        this.setState(({ wasSelected }) => ({ wasSelected: 0 }));
      }
    }
  }

  render() {
    const { name, weight, quantity, gift, offer, disabled } = this.props;
    const { selected, wasSelected } = this.state;

    let classNames = "card";
    if (selected) {
      classNames += " selected";
    }
    if (wasSelected) {
      classNames += " was-selected";
    }
    if (disabled) {
      classNames += " disabled";
    }
    const offerDefault = () => {
      return (
        <span>
          "Чего сидишь? Порадуй котэ, " <a href="#">купи</a>
        </span>
      );
    };

    return (
      <div className={classNames} onClick={this.onSelect}>
        <p className="card__slogan">
          {wasSelected > 0 ? "Котэ не одобряет?" : "Сказочное заморское яство"}
        </p>
        <h3 className="card__title">Нямушка</h3>
        <p className="card__subtitle">{name}</p>
        <ul className="card__features">
          <li className="features__item">
            <b>{quantity} порций</b>
          </li>
          <li className="features__item">
            {gift === 1 ? "мышь в подарок" : gift + " мыши в подарок "}
          </li>
          <li className="features__item">
            {disabled ? "заказчик доволен" : null}
          </li>
        </ul>
        <div className="card__weight">
          <span className="weight__number">{weight}</span>кг
        </div>

        <div className="card__offer">
          {disabled
            ? `Печалька, ${name} закончился`
            : selected
            ? offer
            : offerDefault()}
        </div>
        <div className="card__background">
          <svg
            className="card__svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="326px"
            height="486px"
          >
            <path
              fill="transparent"
              strokeWidth="4px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"
            />
          </svg>
        </div>
      </div>
    );
  }
}
export default Card;
