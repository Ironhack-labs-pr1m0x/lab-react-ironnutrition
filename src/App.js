import React from 'react';
import '../node_modules/bulma/css/bulma.min.css';
// Components
import FoodBox from './Component/FoodBox';
import FoodDiary from './Component/FoodDiary';
import ModalForm from './Component/ModalForm';
import SearchBar from './Component/SearchBar';
// Data
import food from './foods.json';

class App extends React.Component {
  state = {
    showModal: false,
    foodList: food,
    foodListFilter: food,
    foodDiary: {},
    totalCal: 0,
    searchInput: '',
  };

  handleFoodDiary = ({ name, quantity }) => {
    this.setState((state, props) => {
      const getFood = this.state.foodList.find((food) => food.name === name);
      const hcFoodDiary = { ...state.foodDiary };

      if (getFood.name in state.foodDiary) {
        hcFoodDiary[getFood.name] =
          hcFoodDiary[getFood.name] + getFood.calories * quantity;

        return {
          foodDiary: hcFoodDiary,
        };
      } else {
        hcFoodDiary[getFood.name] = getFood.calories * quantity;
        return { foodDiary: hcFoodDiary };
      }
    });
  };

  handleSearchInput = (searchInput) => {
    this.setState({ searchInput });
    this.filterFoodList();
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  createFood = (childData) => {
    this.setState({
      foodList: [childData, ...this.state.foodList],
      foodListFilter: [childData, ...this.state.foodList],
    });
  };

  filterFoodList = () => {
    this.setState((state, props) => {
      const hcFood = [...this.state.foodListFilter];
      const filtered = hcFood.filter((food) => {
        return food.name
          .toLowerCase()
          .includes(state.searchInput.toLowerCase());
      });

      return { foodList: filtered };
    });
  };

  render() {
    const foodElements = this.state.foodList.map((meal, index) => {
      return (
        <FoodBox
          data={meal}
          id={index}
          key={index}
          addToFoodDiary={this.handleFoodDiary}
        />
      );
    });

    return (
      <div>
        <button onClick={this.handleModal}>ADD NEW FOOD</button>
        {this.state.showModal && <ModalForm addFood={this.createFood} />}
        <SearchBar
          searchInput={this.state.searchInput}
          handleSearchInput={this.handleSearchInput}
        />
        <div style={{ display: 'flex' }}>
          <div>{foodElements}</div>
          <div style={{ padding: '25px' }}>
            <FoodDiary foodDiary={this.state.foodDiary} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
