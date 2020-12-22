import NewStack from "./NewStack";
import Stack from "./Stack";

export default function Home() {
  return (
    <div className="App">
      <NewStack />
      <div className="grid-box">
        <Stack />
      </div>
    </div>
  );
}
