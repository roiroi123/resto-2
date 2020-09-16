

export default function ConfReducer(state: any, action: any){
  
    if (action.type === "red") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "green") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "yellow") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "blue") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "pink") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "orange") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
    if (action.type === "salmon") {
      const { payload } = action;
      
      return { ...state, starsColor: payload };
    }
  
    return state;
  }