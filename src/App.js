import "./App.css";
import data from "./json/data.json";
import friends from "./json/friends.json";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </>
  );
}

export default App;
