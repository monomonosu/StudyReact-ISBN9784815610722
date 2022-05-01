export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <h1>こんにちは世界！</h1>
            <p>お元気ですか</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};