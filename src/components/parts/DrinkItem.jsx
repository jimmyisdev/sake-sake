import { useState, useEffect } from "react";
import { BsInfoSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToRound } from "./../../redux/reducers/roundReducer";


export default function DrinkItem({
  name,
  img,
  info,
  glass,
  ingredients,

}) {
  const dispatch = useDispatch();
  const [drinkDetail, setDrinkdetail] = useState(false);
  const [selectDefault, setSelectDefault] = useState(0)
  const [orderItem, setOrderItem] = useState({
    orderDrink: name,
    itemAmount: null,
  });

  function handleSingleOrder() {
    if ( orderItem.itemAmount > 0) {
      dispatch(addToRound(orderItem));
      setOrderItem({ orderDrink: name, itemAmount: 0 });
    }
  }

  useEffect(() => {
    if (orderItem.itemAmount) {
      handleSingleOrder();
      setSelectDefault(0);
    }
  }, [orderItem.itemAmount]);


  return (
    <div className="box">
      <div className="box_img">
        <img src={img} alt={name} />
      </div>
      <div className="box_content">
        <div className="info">
          <div className="info_header">
            <h2>
              <strong>{name}</strong>
            </h2>
            <button
              className="icon"
              onClick={() => setDrinkdetail(!drinkDetail)}
            >
              <BsInfoSquare />
            </button>
          </div>
          {drinkDetail && (
            <div className="info_content">
              <p>
                {name} is made of
                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item},</span> : null;
                })}
                & served in {glass}<br/>

                Type:<span>{info} </span>
              </p>
            </div>
          )}
        </div>
        <select
          name={name}
          defaultValue={selectDefault}
          onChange={(e) =>
            setOrderItem({ orderDrink: name, itemAmount: e.target.value })
          }
        >
          <option value="0">Amount</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}
