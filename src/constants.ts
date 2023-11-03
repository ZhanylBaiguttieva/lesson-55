import {Ingredient} from './types';
import meatImg from './assets/meatImg.png';
import cheeseImg from './assets/cheeseImg.png';
import saladImg from './assets/saladImg.png';
import baconImg from './assets/baconImg.png';

export const INGREDIENTS: Ingredient[] = [
  {id: 1, name: 'Meat', price:80, image: meatImg},
  {id: 2, name: 'Cheese', price:50, image: cheeseImg},
  {id: 3, name: 'Salad', price:10, image: saladImg},
  {id: 4, name: 'Bacon', price:60, image: baconImg},
]