import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from 'react';

export default function Payment() {
  const allOrderDetail = useSelector((state) => state.bill.allOrderDetail);
  const buyTshirtStatus = useSelector((state) => state.bill.buyTshirtStatus);

  const tshirtPrice = useSelector((state) => state.bill.priceList.tshirtPrice);
  const serviceFee = useSelector((state) => state.bill.priceList.serviceFee);
  
  const [drinksTotalAmount, setDrinksTotalAmount] = useState(0)
  const [drinkFee, setDrinkFee] = useState(0)
  const [totalFee, setTotalFee] = useState(0)

  
  function drinkAmountCalc(){
    const drinksTotalAmount = allOrderDetail.reduce((total, item) => {
      return total + parseInt(item.amount);
    }, 0);

    setDrinksTotalAmount(drinksTotalAmount);
  }
  function totalFeeCalc (){
    const newDrinkTotalPrice = drinksTotalAmount * 300;
    const newTshirtPrice = buyTshirtStatus ? 2000: 0;
    setDrinkFee(newDrinkTotalPrice);
    setTotalFee(serviceFee + newTshirtPrice + newDrinkTotalPrice);
  };
  useEffect(() => {
    drinkAmountCalc();
  }, [allOrderDetail]);
  useEffect(() => {
    totalFeeCalc();
  }, [buyTshirtStatus, drinksTotalAmount]);
  console.log(allOrderDetail);


    return (
      <>
        <div className="payment smBox">
          <h1>Your Bill</h1>
          {allOrderDetail &&
            allOrderDetail.map((item, index) => {
              const { id, orderList } = item;
              return (
                <div className="payment_list" key={id}>
                  <h5>Round Ｎr. {index + 1}</h5>
                  <ul>
                    {orderList.map((itemContent) => {
                      return (
                        <li className="list_detail" key={uuidv4()}>
                          <h5>{itemContent.orderDrink}</h5>
                          <span>{itemContent.itemAmount}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

          <div className="payment_list">
            <h3>Count</h3>

            <ul>
              <li className="list_detail">
                <h4>Drinks Fee</h4>
                <span>300&emsp;*&emsp;{drinksTotalAmount}</span>

                <span>{drinkFee}</span>
              </li>
              {buyTshirtStatus ? (
                <li className="list_detail">
                  <h4>Logo Tshirt</h4>
                  <span>{buyTshirtStatus ? tshirtPrice : 0}</span>
                </li>
              ) : null}

              <li className="list_detail">
                <h4>Service Fee</h4>
                <span>{serviceFee}</span>
              </li>
            </ul>
          </div>

          <div className="payment_list">
            <h3>Total</h3>
            <ul>
              <li className="list_detail">
                <h3>Amount</h3>
                <h3>{totalFee}</h3>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}
