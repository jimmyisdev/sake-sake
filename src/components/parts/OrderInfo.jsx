import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsExclamationCircleFill, BsXCircleFill } from "react-icons/bs";

export default function OrderInfo() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(true);

    }, [])

    const instruction = [
      "Input your drink & Select amount!",
      "Check the order list & click [make order]",
      "Repeat & drink as much as you can",
      "Once you get drunk, click [check please] & pay",
    ];
    return (
      <div className="order_info">
        {show && (
          <div  className="order_info_content">
            <h3>Better Read First!!</h3>

            <ul>
              {instruction.map((item, index) => {
                return (
                  <li key={index}>
                    {index + 1} . {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="order_info_btn">
          <button className="icon" onClick={() => setShow(!show)}>
            {show ? <BsXCircleFill /> : <BsExclamationCircleFill />}
          </button>
        </div>
      </div>
    );
}
