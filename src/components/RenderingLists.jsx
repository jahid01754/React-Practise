import { people } from "./data.jsx";
import getImageUrl from "./Clock";

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

export default function RenderingLists() {
  // const listItems = people.map((person) => <li>{person}</li>);

  // const chemist = people.filter((person) => person.profession === "chemist");

  // const listItems = chemist.map((person) => (
  //   <li key={person.id}>
  //     <img src={getImageUrl(person)} alt={person.name} />
  //     <p>
  //       <b>{person.name}: </b>
  //       {" " + person.profession + " "}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // ));
  const listItems = people.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });

  return (
    <>
      <div>
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
