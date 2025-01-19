import "./App.css";
import { RadioGroup, RadioOption } from "./Radio/index";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    alert(`You selected: ${selected}`);
  };

  console.log("Selected value:", selected); // Debugging the selected value

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup
        onChange={(value, label) => setSelected(label)} // Pass label text directly
        selected={selected} // Compare against label
      >
        <RadioOption value="social_media" label="Social Media">
          Social Media
        </RadioOption>
        <RadioOption value="friends" label="Friends">
          Friends
        </RadioOption>
        <RadioOption value="advertising" label="Advertising">
          Advertising
        </RadioOption>
        <RadioOption value="other" label="Other">
          Other
        </RadioOption>
      </RadioGroup>
      <button
        disabled={!selected}
        className={isClicked ? "clicked" : ""}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
