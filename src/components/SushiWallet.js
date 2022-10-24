import React, { useState } from "react";

function SushiWallet({handleAddMoney}){
    const [addMoney, setAddMoney] = useState(0)
    
    function submitNewMoney(e){
        e.preventDefault()
        handleAddMoney(addMoney)
        setAddMoney(0)
    }
    return (
    <form onSubmit={submitNewMoney}>
        Add Money: 
        <input 
        type="number"
        placeholder="enter amount"
        value={addMoney}
        onChange={(e) => setAddMoney(parseFloat(e.target.value))}
        />
        <button type="submit">Deposit</button>


    </form>
    )
}

export default SushiWallet