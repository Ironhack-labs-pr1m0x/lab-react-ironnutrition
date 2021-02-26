import React from 'react';

export default class ModalForm extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleUserInput = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleNewFood = () => {
    const { name, calories, image } = this.state;
    this.props.addFood({
      name,
      calories: +calories,
      image,
    });

    this.setState({ name: '', calories: 0, image: '' });
  };

  render() {
    return (
      <div style={{ padding: '25px' }}>
        <h1 className="title is-1">New Food</h1>

        <div style={{ display: 'flex', gap: '20px' }}>
          <form action=""></form>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleUserInput}
            type="text"
            name="name"
            value={this.state.name}
          />
          <label htmlFor="calories">Calories</label>
          <input
            onChange={this.handleUserInput}
            type="text"
            name="calories"
            value={this.state.calories}
          />

          <label htmlFor="image">Image</label>
          <input
            onChange={this.handleUserInput}
            type="text"
            name="image"
            value={this.state.image}
          />
          <button onClick={this.handleNewFood} className="btn-submit">
            Create Food
          </button>
        </div>
      </div>
    );
  }
}
