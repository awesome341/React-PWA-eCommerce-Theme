import { combineReducers } from 'redux';
import _ from 'lodash';
import { ADD_PRODUCT } from './actions';

const items = (state = [], action) => {
  switch (action.type) {
  case ADD_PRODUCT:
    if (state.length === 0 || !_.find(state, ['id', action.id])) {
      return [
        ...state,
        {
          id: action.id,
          price: action.price,
          name: action.name,
          image: action.image,
          quantity: 1,
        },
      ];
    }

    return state.map((obj) => {
      if (obj.id === action.id) {
        return Object.assign({}, obj, {
          quantity: obj.quantity + 1,
        });
      }
      return obj;
    });

  default:
    return state;
  }
};

export const getCart = state => state.items;

export default combineReducers({
  items,
});
