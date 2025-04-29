import { people, recipes, poem } from "./data.jsx";
import getImageUrl from "./Clock";
import { Fragment } from "react";

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

  // const listItems = people.map((person) => {
  //   return (
  //     <li key={person.id}>
  //       <img src={getImageUrl(person)} alt={person.name} />
  //       <p>
  //         <b>{person.name}</b>
  //         {" " + person.profession + " "}
  //         known for {person.accomplishment}
  //       </p>
  //     </li>
  //   );
  // });

  const chemist = people.filter((person) => person.profession === "chemist");

  const listItemsChemist = chemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const otherPeople = people.filter(
    (person) => person.profession !== "chemist"
  );

  function Recipe({ name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }

  let output = [];

  poem.lines.forEach((line, i) => {
    output.push(<hr key={i + "-separator"} />);
    output.push(<p key={i + "-text"}>{line}</p>);
  });
  output.shift();

  return (
    <>
      <div>
        <h2>Chemists</h2>
        <ul>{listItemsChemist}</ul>
        <h2>Everyone Else</h2>
        <ul>
          {otherPeople.map((person) => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name}></img>
              <p>
                <b>{person.name}</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Recipies</h1>
        {recipes.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <ul>
              {item.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </div>

      <div>
        <article>{output}</article>
      </div>

      <article>
        {poem.lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <hr />}
            <p>{line}</p>
          </Fragment>
        ))}
      </article>
    </>
  );
}
