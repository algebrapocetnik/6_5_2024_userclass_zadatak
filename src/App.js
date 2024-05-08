import "./App.css";
import ClassComponents from "./components/classComponents/ClassComponents";
import FuncComponent from "./components/funcComponent/FuncComponent";
import UserProfile from "./components/userProfile/UserProfile";
import UserProfileClass from "./components/userProfileClass/UserProfileClass";
function App() {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };

  return (
    <div className="App">
      <ClassComponents />
      <FuncComponent />
      <br></br>
      <UserProfile firstname={user.firstname} lastname={user.lastname} />
      <UserProfileClass/>
    </div>
  );
}

export default App;
