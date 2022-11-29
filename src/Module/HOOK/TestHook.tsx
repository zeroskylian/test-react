import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button } from "antd";
import { Action } from "redux";

export default function TestHook() {
  const [buttonText, setButtonText] = useState("Click me, please");
  const [buttonColor, setButtonColor] = useState("#FFF");

  function handleClick() {
    setButtonText("Thanks, been clicked!");
    setButtonColor("#DDD");
  }

  return (
    <div>
      <Button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        {buttonText}
      </Button>
    </div>
  );
}

export const AppContext = React.createContext({ username: "" });

function Navbar() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>Nav name: {username}</p>
    </div>
  );
}

function Messages() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>Messages name: {username}</p>
    </div>
  );
}

export function TestUseContext() {
  return (
    <AppContext.Provider value={{ username: "name" }}>
      <Navbar />
      <Messages />
    </AppContext.Provider>
  );
}

export function TestUseEffect(props: { name: string }) {
  const { name } = props;
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch(`https://httpbin.org/get?name=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUsername(data.args.name);
      });
  }, [name]);

  return <div>name is {username}</div>;
}

const myReducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "countUp":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
export function TestUseRedux() {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  return (
    <div>
      <Button onClick={() => dispatch({ type: "countUp" })}>+1</Button>
      <p>Count: {state.count}</p>
    </div>
  );
}

const useName = (name: string) => {
  const [person, setPerson] = useState("");
  useEffect(() => {
    fetch(`https://httpbin.org/get?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.args.name);
      });
  }, [name]);
  return [person];
};

export function TestUseName(props: { name: string }) {
  const { name } = props;
  const [username] = useName(name);
  return <div>name is {username}</div>;
}

export function TestEffectCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        return c + 1;
      }); 
    }, 1000);
    return () => {
      clearInterval(id); // 不会多次销毁了
    };
  }, []);
  return <h1>{count}</h1>;
}
