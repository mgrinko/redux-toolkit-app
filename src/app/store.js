import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'dec':
        return {
          ...state,
          count: state.count - 1
        };
      case 'inc':
        return {
          ...state,
          count: state.count + 1
        };
      default:
        return state;
    }
  },
});
