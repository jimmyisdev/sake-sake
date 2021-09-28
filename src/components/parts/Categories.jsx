import React, { useEffect, useState } from 'react'
import axios from "axios";




export default function Categories() {
  const categoryApi =
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const Data = await axios.get(categoryApi);
      const AllCategories = Data.data.drinks;
    } catch (error) {
      console.log(error);
    }
  };
  getCategory()
  useEffect(() => {}, [category]);

  useEffect(() => {

  })




  return <h1>{category}</h1>;

//   if(!category){
//       return(<ul>{category.map(item => <li>{item}</li>)}</ul>);
//   }else{
//       return(<h2>loading</h2>)
//   }
}
