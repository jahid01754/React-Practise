import { SculptureList } from "../data.jsx";
import { useState } from "react";

// 1st Example
function onPlaying() {
  alert("Playing!");
}

const handleUpload = () => {
  alert("Uploading!");
};

// 2nd Example
function Button({ buttonClick, children }) {
  return <button onClick={buttonClick}>{children}</button>;
}

function Toolbar({ onPlayingMovie, onUploadImage }) {
  return (
    <div>
      <Button buttonClick={onPlayingMovie}>Play Movie</Button>
      <Button buttonClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

// 3rd Example

export default function AddingInterActivity() {
  // functionality of 3rd example
  const [index, setIndex] = useState(0);
  const hasNext = index < SculptureList.length - 1;

  // broader way
  // const handleNextClick = () => {
  //   if (hasNext) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // };

  // shortcut way
  const handleNextClick = () => (hasNext ? setIndex(index + 1) : setIndex(0));

  const [showMore, setShowMore] = useState(false);
  // const handleMoreClick = () => {
  //   setShowMore(!showMore);
  // };
  const handleMoreClick = () => setShowMore(!showMore);

  let sculpture = SculptureList[index];

  return (
    <>
      {/* 1st Example */}
      <div>
        <button onClick={onPlaying}>Play Movie</button>
        <button onClick={handleUpload}>Upload Image</button>
        <button onClick={() => alert("This is button is clicked!")}>
          Click
        </button>
      </div>

      {/* 2nd Example */}
      <Toolbar
        onPlayingMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />

      {/* 3rd Example */}
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        {index + 1} of {SculptureList.length}
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"}details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
