import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import IncomeExpenses from './Components/IncomeExpenses/IncomeExpenses';
import TransactionList from './Components/TransactionList/TransactionList';
import AddTransaction from './Components/AddTransaction/AddTransaction';
import {GlobalProvider} from './Context/Context';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>


    </div>
  );
}

export default App;
