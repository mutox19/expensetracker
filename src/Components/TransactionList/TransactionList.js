import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Context';
import Transaction from '../Transaction/Transaction';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>history</h3>
            <ul id="list" className="list">
                {
                    transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>))
                }

            </ul>
        </div>
    );
};

export default TransactionList;