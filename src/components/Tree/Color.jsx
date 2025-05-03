// Color.jsx
export default function Color({ value }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: value,
        margin: "10px 0",
        border: "1px solid #000",
      }}
    >
      {value}
    </div>
  );
}
