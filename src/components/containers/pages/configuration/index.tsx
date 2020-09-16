import React, { useContext,useReducer } from "react";
import Button from "react-bootstrap/Button";
import { ConfigurationContext } from "App";
import ConfReducer from '../../../../app-reducer/confReducer'




export default function ConfigurationPage() {
  const [getConfig, setConfig] = useContext(ConfigurationContext);
  
  const [state,dispatch] = useReducer(ConfReducer,getConfig)
  
  function onColorChange(color: string): void {
    // setConfig({ ...getConfig, starsColor: color });
    
    dispatch({ type: `${color}` , payload: color });
    
    setConfig({...getConfig,starsColor:state.starsColor})
    
   

  }

  const configButtonsColor = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "salmon",
  ];

  return (
    <div>
      <h1 className="jumbotron"> Configuration </h1>
      <div>
        {configButtonsColor.map((color) => {
          return <ButtonWrapper color={color} />;
        })}
      </div>
    </div>
  );

  function ButtonWrapper(props: { color: string }) {
    const { color } = props;
    
    return (
      <Button
        onClick={() => {
          onColorChange(color);
        }}
        variant="primary"
        size="lg"
        active
      >
        {color}
      </Button>
    );
  }
}
