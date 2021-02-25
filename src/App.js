import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Item from "./components/Item";

export default function App() {
  const [list, setList] = useState([]);
  const [loves, setLoves] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/api/solicitations.json?keyword=sbir");
      setList(request.data);
      let arr = [];
      if (request.data.length > 0) {
        for (let x = 0; x < request.data.length; x++) {
          arr.push({ favorite: request.data[x], love: false });
        }
        setLoves(arr);
      }
    }
    fetchData();
  }, []);

  const handleFavorite = (i) => {
    setLoves([
      ...loves.slice(0, i),
      { favorite: loves[i]["favorite"], love: !loves[i]["love"] },
      ...loves.slice(i + 1),
    ]);
  };

  const saveToFile = () => {
    let favoriteItems = [];
    loves.forEach((element) => {
      if (element.love === true) {
        favoriteItems.push(element.favorite);
      }
    });
    // reference: https://stackoverflow.com/questions/48199781/without-node-js-or-running-a-server-is-it-possible-to-create-output-a-json-file
    let jsonObjectAsString = JSON.stringify(favoriteItems);
    let blob = new Blob([jsonObjectAsString], {
      type: "octet/stream",
    });
    let anchor = document.createElement("a");
    anchor.download = "favorite.json";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.innerHTML = "download";
    anchor.click();
  };

  return (
    <>
      <div className="save__btn">
        <Button variant="contained" color="primary" onClick={saveToFile}>
          Save favorited item(s).
        </Button>
      </div>
      <div className="list__container">
        {list?.map((item, index) => (
          <Item
            key={index}
            item={item}
            i={index}
            length={list.length}
            loves={loves}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </>
  );
}
