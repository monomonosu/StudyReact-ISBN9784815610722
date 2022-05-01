import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <h1 style={{ color: "red" }}>こんにちは世界！</h1>
            <ColoredMessage color="blue" message="お元気ですか"></ColoredMessage>
            <ColoredMessage color="pink" message="元気です"></ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};