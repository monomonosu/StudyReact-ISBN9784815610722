import { useFetchMusics } from "./hooks/useFetchMusics";

export const App4 = () => {
    const { musicList, isLoading, isError, onClickFetchMusic } = useFetchMusics();

    return (
        <div>
            <button onClick={onClickFetchMusic}>音楽取得</button>
            {/* エラーの場合はメッセージ表示 */}
            {isError && <p style={{ color: "red" }}>エラーが発生しました。</p>}
            {/* ローディング中は表示を切り替える */}
            {isLoading ? (<p>データ取得中です</p>) : (musicList.map(music => (
                <p key={music.id}>{`${music.id}:${music.name}(${music.fileSize}←容量)`}</p>
            ))
            )}
        </div>
    );
};