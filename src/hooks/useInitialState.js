import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    //Estado
  const [state, setState] = useState(initialState);

  //Función para agregar al carrito
  const addToCart = payload => {
    //Actualiza el state.cart con la misma información que tenia sumandole el payload o lo nuevo que se agrega al carrito
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  //Función para remover del carrito
  const removeFromCart = payload => {
    // Filtra los items del carrito que tengan un ID diferente al payload (Elimina el que coincida con el ID)
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

    //Función para agregar un comprador
    const addToBuyer = payload => {
      //Actualiza el state.cart con la misma información que tenia sumandole el payload o lo nuevo que se agrega al carrito
      setState({
        ...state,
        buyer: [...state.buyer, payload],
      });
    }

    //Función para agregar una nueva orden
    const addNewOrder = payload => {
      setState({
        ...state,
        orders: [...state.orders, payload]
      })
    }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,

  };
};

export default useInitialState;