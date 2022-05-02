import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App = () => {
    console.log('レンダリング');
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
        <div>
            <h1 style={{ color: "red" }}>こんにちは世界！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <p>------</p>
            <CssModules></CssModules>
        </div>
    );
};