import React from "react";

type Box = { flex: number; background: string };

export default function TestMemo2Better() {
  const [name, setName] = React.useState("");
  const [boxWidth, setBoxWidth] = React.useState(1);

  const id = React.useId();

  const boxes = React.useMemo(() => {
    return [
      { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
      { flex: 3, background: "hsl(260deg 100% 40%)" },
      { flex: 1, background: "hsl(50deg 100% 60%)" },
    ];
  }, [boxWidth]);

  return (
    <>
      <Boxes boxes={boxes} />
      <section style={{ textAlign: "center" }}>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label htmlFor={`${id}-box-width`}>First box width:</label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

function Boxess(props: { boxes: Box[] }) {
  console.log("render");
  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        display: "flex",
        textAlign: "center",
      }}>
      {props.boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={{
            ...boxStyles,
            marginLeft: "20px",
            marginRight: "20px",
            borderRadius: "20px",
          }}
        />
      ))}
    </div>
  );
}

const Boxes = React.memo(Boxess);
