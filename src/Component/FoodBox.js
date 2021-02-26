import React from 'react';

export default class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  upLiftFoodDiary = (ev) => {
    this.props.addToFoodDiary({
      name: ev.target.getAttribute('data-food-identifier'),
      quantity: this.state.quantity,
    });
  };

  handleSelect = (ev) => {
    this.setState({ quantity: ev.target.value });
  };

  render() {
    const { image, name, calories } = this.props.data;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleSelect}
                  className="input"
                  type="number"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  data-food-identifier={name}
                  onClick={this.upLiftFoodDiary}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
