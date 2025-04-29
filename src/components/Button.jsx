function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li>{name} ✅</li>;
  //   // return null;
  // } else {
  //   return <li>{name}</li>;
  // }
  // return <li>{isPacked ? name + "✅" : name}</li>;
  return <li>{!isPacked ? name + " ❌" : name + " ✅"}</li>;
  // return <li>{isPacked ? <del>{name} "✅"</del> : name}</li>;
  // return (
  //   <li>
  //     {name} {isPacked && "✅"}
  //   </li>
  // );

  // let itemContent = name;
  // if (isPacked) {
  //   itemContent = name + "✅";
  // }
  // return <li>{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name={"Space suit"} />
        <Item isPacked={true} name={"Helmet with a golden leaf"} />
        <Item isPacked={false} name={"Photo of Tam"} />
      </ul>
    </section>
  );
}
