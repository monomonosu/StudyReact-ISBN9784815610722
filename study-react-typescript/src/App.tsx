import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

type Music = {
  id: number;
  musicName: string;
  fileSize: string;
}

export const App = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  useEffect(() => {
    axios.get<Music[]>("http://10.231.136.165:8080/test").then((response) => {
      setMusics(response.data);
    })
  }, []);

  return (
    <div>
      {musics.map(music => (<ListItem id={music.id} musicName={music.musicName} fileSize={music.fileSize} key={music.musicName}></ListItem>))}
    </div>
  );
};