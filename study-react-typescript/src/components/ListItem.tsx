import type { FC } from "react";
import type { Music } from "../types/music";

export const ListItem: FC<Music> = props => {
    const { id, musicName, fileSize } = props;
    return (
        <p>
            {id}:{musicName}({fileSize})
        </p>
    );
};

ListItem.defaultProps = {
    fileSize: "notData"
};