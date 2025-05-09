import { useState } from "react";

const initialList = [
  {
    id: 0,
    title: "Big Bellies",
    seen: false,
  },
  {
    id: 1,
    title: "Lunar Landscpae",
    seen: false,
  },
  {
    id: 2,
    title: "Terracotta Army",
  },
];

export default function UpdatingArrays() {
  const [list, setList] = useState(initialList);

  const handleToggle = (artworkId, nextSeen) => {
    setList(
      list.map((artwork) => {
        if (artwork.id === artworkId) {
          return {
            ...artwork,
            seen: nextSeen,
          };
        } else {
          return artwork;
        }
      })
    );
  };
  return (
    <>
      <div>
        <h1>Art Bucket List</h1>
        <h2>My list of Art to see</h2>
        <ItemList artworks={list} onToggle={handleToggle} />
      </div>
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={(event) => {
                  onToggle(artwork.id, event.target.checked);
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
