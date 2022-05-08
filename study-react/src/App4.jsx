import { useState } from "react";
import axios from "axios";

export const App4 = () => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchMusic = () => {
        setIsLoading(true);
        setIsError(false);

        axios
            .get("http://10.231.136.165:8080/test")
            .then(result => {
                const musics = result.data.map(music => ({
                    id: music.id,
                    name: `${music.musicName} / ${music.artist}`,
                    fileSize: music.fileSize,
                }));
                setMusicList(musics);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    };

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