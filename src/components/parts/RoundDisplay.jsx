import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { clearRound, deleteOrder } from "./../../redux/reducers/roundReducer";
import { makeOrder, checkPlease } from "./../../redux/reducers/billReducer";
import { BsFillTrashFill } from "react-icons/bs";


export default function RoundDisplay() {
    const orderList = useSelector((state) => state.round.orderList);
    const round = useSelector((state) => state.round);
    const dispatch = useDispatch();

    function handelOrder() {
   if (round.orderList.length > 0) {
     const newId = uuidv4();
     const amount = round.orderList.reduce((total, item) => {
       return total + parseInt(item.itemAmount);
     }, 0);
     const newRound = {
       id: newId,
       orderList: round.orderList,
       amount: amount,
     };
     dispatch(makeOrder(newRound));
     alert("Ordered dispatched")
     dispatch(clearRound());
   }
 }
    return (
      <div className="round_display smBox">
        <ul className="round_display_container">
          {orderList.length > 0 &&
            orderList.map((item) => {
              const { orderDrink, itemAmount } = item;
              return (
                <li className="round_display_item" key={uuidv4()}>
                  <span>{itemAmount}</span>
                  <h5>{orderDrink}</h5>

                  <button
                    className="icon"
                    onClick={() =>
                      dispatch(
                        deleteOrder({
                          orderDrink: orderDrink,
                          itemAmount: itemAmount,
                        })
                      )
                    }
                  >
                    <BsFillTrashFill />
                  </button>
                </li>
              );
            })}
        </ul>
        <div className="menu_btns">
          <button onClick={handelOrder}>Make Order</button>
          <button onClick={() => dispatch(checkPlease())}>Check Please</button>
        </div>
      </div>
    );
}
