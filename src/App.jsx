import getImageUrl from "./components/Clock";

const ratio = window.devicePixelRatio;

function Profile({ person, size }) {
  // let thumbnailSize = "s";
  // if (size > 90) {
  //   thumbnailSize = "b";
  // }
  let thumbnailSize = ratio * size > 90 ? "b" : "s";

  return (
    <div>
      <section>
        <h2>{person.name}</h2>
        <img
          src={getImageUrl(person, thumbnailSize)}
          alt={person.name}
          height={size}
          width={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
          </li>
          <li>
            <b>Discoverd: </b>
            {person.discovery}
          </li>
        </ul>

        <h1>{thumbnailSize}</h1>
      </section>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientist</h1>
      <Profile
        person={{
          imageId: "szV5sdG",
          name: "Skłodowska-Curie",
          profession: "physicist and chemist",
          discovery: "polonium (chemical element)",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
        size={70}
      />

      <Profile
        person={{
          imageId: "YfeOqp2",
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          discovery: "a method for measuring carbon dioxide in seawater",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        }}
        size={120}
      />
    </div>
  );
}
