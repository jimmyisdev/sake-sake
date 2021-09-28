import { useSelector } from "react-redux";
import DrinkItem from "./DrinkItem";
import RoundDisplay from "./RoundDisplay";



export default function Menu() {
  const cocktailsData = useSelector((state) => state.cocktail);
  const { items, isLoading } = cocktailsData;
  

  if (isLoading) {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="sake sake"
        />
      </div>
    );
  }
  if (items < 1) {
    return <h2>No matched item</h2>;
  }
  return (
    <section>
      <RoundDisplay />

      <div className="item_row">
        {items.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
          } = item;
          return (
            <DrinkItem
              key={idDrink}
              name={strDrink}
              img={strDrinkThumb}
              info={strAlcoholic}
              glass={strGlass}
              ingredients={[strIngredient1, strIngredient2, strIngredient3]}
            />
          );
        })}
      </div>
    </section>
  );
}
