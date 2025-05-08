import { useState } from "react";
export default function Chat() {
  const [to, setTo] = useState("Alice");
  const [Message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      alert(`You said ${Message}: to  ${to}`);
      setMessage("");
    }, 1000);
  };

  const valueChange = (event) => {
    setTo(event.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            To:{" "}
            <select value={to} onChange={valueChange}>
              <option value={"Alice"}>Alice</option>
              <option value={"Bob"}>Bob</option>
              <option value={"Charlie"}>Charlie</option>
            </select>
          </label>
          <br />
          <br />
          <textarea
            placeholder="Message"
            value={Message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
