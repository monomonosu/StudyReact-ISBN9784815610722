type Music = {
    id: number;
    musicName: string;
    fileSize: string;
}

export const ListItem = (props: Music) => {
    const { id, musicName, fileSize } = props;
    return (
        <p>
            {id}:{musicName}({fileSize})
        </p>
    );
};