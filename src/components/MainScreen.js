import Button from "./Button";

export default function MainScreen(props) {
  const levelText = ["Easy", "Medium", "Hard"];

  return (
    <div className="mainscreen text-center">
      <h1 className="mainscreen--title">Memory Game</h1>
      <div className="mainscreen--menu">
        <p>Select level</p>
        <Button label={levelText[props.level]} action={props.changeDifficulty} />
        <br />
        <Button label="Start" action="" />
      </div>
    </div>
  );
}
