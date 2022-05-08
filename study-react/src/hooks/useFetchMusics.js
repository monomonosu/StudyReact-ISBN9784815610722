import { useState } from "react"
import axios from "axios"

export const useFetchMusics = () => {
    const [musicList, setMusicList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchMusic = () => {
        setIsLoading(true);
        setIsError(false);

        axios.get("http://10.231.136.165:8080/test")
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
    return { musicList, isLoading, isError, onClickFetchMusic };
}