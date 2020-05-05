import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../Context/Context';
const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const OnSubmit =(e) =>{

        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New AddTransaction</h3>
            <form id="form" onSubmit={OnSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text...." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">>Amount<br/>
                    (negative - expense, positive - income)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount...." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;