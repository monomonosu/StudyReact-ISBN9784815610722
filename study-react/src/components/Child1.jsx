import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from "react";

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px",
};

export const Child1 = memo(() => {
    console.log("Child1レンダリング");
    return (
        <div style={style}>
            <p>Child1</p>
            <Child2></Child2>
            <Child3></Child3>
        </div>
    )
});