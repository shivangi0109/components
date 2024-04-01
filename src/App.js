import { GoBellFill, GoCheckCircle, GoEye } from "react-icons/go";
// import * as GoIcons from "react-icons/go";
import Button from "./Button";
// console.log(GoIcons);

function App() {
  const handleClick = () => {
    console.log('Click!!');
  };

  return (
    <div>
      <div>
        <Button success outline rounded className="mb-5" onClick={handleClick}>
          <GoBellFill />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCheckCircle />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoEye />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads</Button>
      </div>
      <div>
        <Button primary rounded>Something!</Button>
      </div>
    </div>
  );
}

export default App;