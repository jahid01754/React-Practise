import Profile from "./Profile";

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function Cup({ guest }) {
  return <h2>Tea cup for guest {guest}</h2>;
}

function TeaCup({ friend }) {
  return <h2>Tea cup for guest {friend}</h2>;
}

export default function Pure({ time = new Date() }) {
  let cups = [];

  for (let i = 1; i <= 6; i++) {
    cups.push(<TeaCup key={i} friend={i} />);
  }

  const hours = time.getHours();
  let className;

  if (hours >= 0 && hours <= 6) {
    className = "night";
    console.log("render night");
  } else {
    className = "day";
    console.log("render day");
  }

  return (
    <>
      <section>
        <h2>Spiced Chai Recipe</h2>
        <h2>For Two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section>

      {cups}

      <h1 className={className}>{time.toLocaleTimeString()}</h1>

      <Profile
        choion={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />

      <Profile
        choion={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
    </>
  );
}
