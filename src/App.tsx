import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <>
      <div>
        <Person
          name="Gustavo"
          email="gustavo@example.com"
          age={21}
          isMarried={false}
          friends={["a", "b", "c"]}
        />
      </div>
    </>
  );
}

export default App;
