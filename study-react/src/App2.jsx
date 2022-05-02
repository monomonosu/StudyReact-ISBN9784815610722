import { memo, useCallback, useState } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App2 = memo(() => {
    console.log("レンダリング");
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    }
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);
    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset}></Child1>
            <Child4></Child4>
        </>
    )
});