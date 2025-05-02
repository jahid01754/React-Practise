import getImageUrl from "../Clock";

function Header({ chonchol }) {
  return <h1>{chonchol.name}</h1>;
}

function Avatar({ shovon }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(shovon)}
      alt={shovon.name}
      width={50}
      height={50}
    />
  );
}

export default function Profile({ choion }) {
  return (
    <div>
      <Header chonchol={choion} />
      <Avatar shovon={choion} />
    </div>
  );
}
