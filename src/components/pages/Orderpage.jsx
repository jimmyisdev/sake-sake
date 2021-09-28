import React from 'react'
import Menu from '../parts/Menu';
import Payment from '../parts/Payment';
import SearchForm from '../parts/SearchForm';
import { useSelector } from "react-redux"
import Goods from '../parts/Goods';
import OrderInfo from '../parts/OrderInfo';


export default function Orderpage() {
  const checkPleaseStatus = useSelector(
    (state) => state.bill.checkPleaseStatus
  );
    return (
      <section className="order">
        {!checkPleaseStatus ? (
          <>
            <OrderInfo/>
            <SearchForm />
            <Menu />
          </>
        ) : (
          <>
          <Goods />
            <Payment />
          </>
        )}
      </section>
    );
}
