import React, {useState} from 'react';
import {BurgerIngredient} from './types';
import {INGREDIENTS} from './constants';
import './App.css';
import './Burger.css';

function App() {
  const [ingredients, setIngredients] = useState<BurgerIngredient[]>( [
    {id: 1, name:'Meat', count: 0},
    {id: 2, name:'Cheese', count: 0},
    {id: 3, name:'Salad', count: 0},
    {id: 4, name:'Bacon', count: 0},
  ]);

  const [totalPrice, setTotalPrice] = useState(
    {price: 0}
  );

  const onDelete = (id: number) => {
    setIngredients((prevState) => {
      const item = prevState.map(ingredient => {
        if (ingredient.id === id && ingredient.count !== 0) {
          return {...ingredient, count: ingredient.count - 1};
        }
        return ingredient;
      });
      setTotalPrice(prevState => {
        let priceIngredient = 30;
        for (let i= 0; i < item.length; i++) {
          priceIngredient += item[i].count * INGREDIENTS[i].price;
        }
        return {...prevState, price: priceIngredient};
      });
      return item;
    });
  };

  const onCountChange = (id: number) => {
    setIngredients((prevState) => {
      const item = prevState.map((ingredient) => {
        if (ingredient.id === id) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return ingredient;
      });
      setTotalPrice(prevState => {
        let priceIngredient = 30;
        for (let i= 0; i < item.length; i++) {
          priceIngredient += item[i].count * INGREDIENTS[i].price;
        }
        return {...prevState, price: priceIngredient};
      });
      return item;
    });
  };
  const imgIngredient = (id: number)=> {
    const detail = INGREDIENTS.find(ingredient => ingredient.id === id);
    if(detail !== undefined) {
      return detail.image;
    } else {
      return undefined;
    }
  }

  const burgerDetails = () => {
    return ingredients.map(ingredient => {
      let countDiv = [];
      for (let i = 0; i < ingredient.count; i++) {
        countDiv.push(<div className={ingredient.name}></div>);
      }
      return countDiv;
    });
  }


  return (
        <div className="container d-flex">
          <div className="container mt-2">
            <h1 className="fs-3">Ingredients:</h1>
            <div className="mt-2 d-flex flex-column gap-2">
              {ingredients.map(ingredient => (
                <div key={ingredient.id} className="card p-2">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <button className="btn btn-white" onClick={() => onCountChange(ingredient.id)}>
                          <img src={imgIngredient(ingredient.id)} width='50px' height='80px' />
                        </button>
                      </div>
                      <div className="col-auto flex-grow-1">
                        {ingredient.name}
                      </div>
                      <div className="col-auto">
                        x {ingredient.count}
                      </div>
                      <div className="col-auto">
                        <button
                          className="btn btn-danger"
                          onClick={() => onDelete(ingredient.id)}
                        >
                          Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container mt-5">
            <h1 className="mb-5 fs-3"> Burger: </h1>
            <div className="Burger">
              <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
              </div>
              {burgerDetails()}
            </div>
            <div className="BreadBottom"></div>
            <div>
              Total price: {totalPrice.price}
            </div>
          </div>
        </div>
  );
}

export default App
