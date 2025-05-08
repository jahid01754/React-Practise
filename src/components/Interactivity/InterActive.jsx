// 1st example
function onPlayMovie() {
  alert("Playing");
}
const onUploadImage = () => alert("Uploading");

// 2nd exmaple
function AlterButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

// 3rd example
function Button({ child }) {
  return <button onClick={onclick}>{child}</button>;
}
function PlayButton({ movieName }) {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`);
  };
  return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
}

function UplaodImage() {
  return <button onClick={() => alert("Uploading")}></button>;
}

export default function InterActive() {
  return (
    <>
      {/* 1st example */}
      <div>
        <button onClick={onPlayMovie}>Play Movie</button>
        <button onClick={onUploadImage}>Upload Image</button>
        <button onClick={() => alert("You Clicked me")}>Click</button>
        {/* <button onClick={alert("You smashed it")}>smash</button> */}
      </div>

      {/* 2nd example */}
      <div>
        <AlterButton message={"Playing"}>Play Movie</AlterButton>
        <AlterButton message={"Uploading"}>Upload Image</AlterButton>
      </div>

      {/* 3rd example */}
      <div>
        <PlayButton movieName={"Kiki's Delivery Service"}></PlayButton>
        <UplaodImage />
      </div>
    </>
  );
}
