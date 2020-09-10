import React, { useContext } from "react"
import { MealsContext } from "App"


export default function OrdersPage() {
    const [state, setState] = useContext(MealsContext)
    return <div>
        <button onClick={() => { setState({ ...state, meals: [...state.meals, "Blablabla"] }) }}> add meal </button>
    </div>
}