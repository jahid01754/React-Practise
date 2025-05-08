import { useState } from "react";

export default function UpdatingObjects() {
  const [person, setPerson] = useState({
    name: "Niki de saint phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (event) => {
    setPerson({
      ...person,
      name: event.target.value,
    });
  };

  const handleTitleChange = (event) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: event.target.value,
      },
    });
  };

  const handleCityChange = (event) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: event.target.value,
      },
    });
  };

  //this will work in useImmer state
  // const handleCityChange = (event) => {
  //   setPerson((update) => {
  //     update.artwork.city = event.target.value;
  //   });
  // };

  const handleImageChange = (event) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: event.target.value,
      },
    });
  };

  //This is work in useImmer State
  // const handleImageChange = (event) => {
  //   setPerson((update) => {
  //     update.artwork.title = event.target.value;
  //   });
  // };

  return (
    <>
      <div>
        <label>
          Name: <input value={person.name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Title:{" "}
          <input value={person.artwork.title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          City:{" "}
          <input
            type="text"
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <br />
        <label>
          Image:{" "}
          <input value={person.artwork.image} onChange={handleImageChange} />
        </label>

        <p>
          <i>{person.artwork.title}</i>
          {" by "}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>

        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </>
  );
}
