export const App = () => {
    const onClickButton = () => {
        alert();
    };

    const colorStyle = {
        color: "blue",
        fontSize: "20px",
    };

    return (
        <div>
            <h1 style={{ color: "red" }}>こんにちは世界！</h1>
            <p style={colorStyle}>お元気ですか</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};