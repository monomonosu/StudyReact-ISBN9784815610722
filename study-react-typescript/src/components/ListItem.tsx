import type { Music } from "../types/music";

export const ListItem = (props: Music) => {
    const { id, musicName, fileSize } = props;
    return (
        <p>
            {id}:{musicName}({fileSize})
        </p>
    );
};