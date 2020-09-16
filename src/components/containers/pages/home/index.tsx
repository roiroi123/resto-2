import React, { useContext, useEffect } from "react";
import { MealsContext } from "App";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import Filter from "components/ui-components/Filter/Filter";
 

export default function HomePage() {
  const [state, dispatch] = useContext(MealsContext);

  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      dispatch({ type: "GET_MEALS_FROM_SERVER_DONE", payload: result.data });
      //   setState({ ...state, meals: [...state?.meals, ...result.data] });
    } catch (ex) {}
  }
  //action(props)
  function addMeal(meal: IMeal) {
    dispatch({ type: "ADD_MEAL", payload: meal });
    // setState({ ...state, orders: [...state.orders, meal] });
  }
  useEffect(() => {
    getRecipesApi();
  }, []);
  if (!state.meals) return <span> No Meals </span>;
  return (
    <div className="row">
    <Filter/>
      {state?.meals.map((meal: any) => {
        return (
          <Meal
            key={meal.name}
            actionTitle="Order Now"
            {...meal}
            action={addMeal}
          />
        );
      })}
    </div>
  );
}
