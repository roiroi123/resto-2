import React from "react"
import { IRoute } from "./"
import { Route } from "react-router-dom";

interface IProps {
    routes: Array<IRoute>
}


export default function RoutesApp(props: IProps): any {
    return props.routes.map((route: IRoute) => <Route {...route} />);
}