import React from "react";
import "./subTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

export const SubTotal = () => {

  const busketCounts = useSelector(state=> state.busket);

 const getBusketTotal = (busket) =>(
    busket?.reduce((amount,item)=>item.price+amount,0)
  )

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({busketCounts.length} items) : <strong>{value}</strong>
            </p>
               <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBusketTotal(busketCounts)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>

    
       
    
    </div>
  );
};
