export default function mealsReducer(state: any, action: IProps) {
    console.log(action.type);
    if (action.type === "ADD_MEAL") {
      const { payload } = action;
      
      return { ...state, orders: [...state.orders, payload] };
    }
    if (action.type === "GET_MEALS_FROM_SERVER_DONE") {
      const { payload } = action;
      return { ...state, meals: payload };
    }
    if (action.type === "REMOVE_MEAL") {
      const { payload } = action;
      // find index blabla // delete
      const newOrders = [...state.orders];
      return { ...state, orders: [...newOrders] };
    }
    if (action.type === "FILTER_MEAL") {
      const { payload } = action;
      console.log(state);
      const filterdArray = state.meals.filter((e:any)=>{return e.name.includes(payload)})
      console.log(filterdArray);

      return { ...state,meals :filterdArray };
    }
   
  
    return state;
  }

  interface IProps {
    type: string; // what am i doing
    payload: any; // what am i sending
  }