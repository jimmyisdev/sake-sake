import React, { useEffect, useState } from 'react'
import {   useDispatch, useSelector } from "react-redux";
import { buyTshirt } from "./../../redux/reducers/billReducer";



export default function Goods() {
    const buyTshirtStatus = useSelector((state) => state.bill.buyTshirtStatus);
    const dispatch = useDispatch()

    

    return (
      <div className="goods_item box">
        <h2>Do you want to have a SakeSake Tshirt </h2>
        <div className="goods_img box_img">
          <img
            src={process.env.PUBLIC_URL + "/assets/tshirtW.png"}
            alt="tshirt"
          />
        </div>
        <div className="goods_desc">
          <span>2000¥</span>
          <button onClick={() => dispatch(buyTshirt())}>
            {buyTshirtStatus ? "No Thanks" : "Buy It"}
          </button>
        </div>
      </div>
    );
}


