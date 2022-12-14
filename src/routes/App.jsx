import React from 'react';
//Importamos los elementos de react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importamos los componentes de las rutas
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
//Importamos el contexto
import AppContext from '../context/AppContext';
//Importamos el Hook useInitialState
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  const isEmpty = Object.keys(initialState.state).length;
  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          {/* Encapsulamos nuestras rutas */}
          <BrowserRouter>
            {/* Con el componente Layout podemos tener siempr el Header y el Footer */}
            <Layout>
              {/* Definimos cada ruta */}
              <Routes>
                {/* Ruta que representa el home */}
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/information" element={<Information />} />
                <Route path="/checkout/payment" element={<Payment />} />
                <Route path="/checkout/success" element={<Success />} />
                {/* Ruta que representa not found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
      {/* // Encapsulamos toda la App en el proveedor de nuestro contexto y le pasamos toda su lógica en el Value */}
    </>
  );
};

export default App;
