import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./styles.css";
import NavBar from "./component/NavBar";
import ChatBox from ;
import Welcome from "./component/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;
