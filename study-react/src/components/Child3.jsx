import { memo } from "react";

const style = {
    backgroundColor: "lightgray",
};

export const Child3 = memo(() => {
    console.log("Child3レンダリング");
    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
});