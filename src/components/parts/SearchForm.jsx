import { useRef, useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { getCocktails } from "./../../redux/reducers/cocktailsReducer";

export default function SearchForm() {
   const dispatch = useDispatch()
    const [ serachTerm, setSearchTerm ] = useState("a");
    const searchValue = useRef('');
    useEffect(() => {
      dispatch(getCocktails(serachTerm));
    }, [serachTerm]);
    function handleSubmit(e){
        e.preventDefault()
    }
    useEffect(() => {
        searchValue.current.focus();
    }, []);


    return (
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={searchValue}
            placeholder="Drink name...?"
            onChange={() => setSearchTerm(searchValue.current.value)}
          />
        </form>
      </div>
    );
}
