import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import './styles.css';
import 'react-toastify/dist/ReactToastify.min.css'

// https://sujeitoprogramador.com/r-api/?api=filmes

function App() {

  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
