// import { useContext } from "react";
// import { AuthContext } from "./context/AuthProvider";
import DesCard from './Component/DesCard';
import HeaderNav from './Component/headerNav'
import SubCategoery from './Component/SubCategoery';
import BreadCrum from './Component/BreadCrum';
// import SubCategoery from './Component/subCategoeryTab'

function App() {
// const AuthInitial = useContext(AuthContext);
  // const temp = AuthInitial !== null ?  AuthInitial.data : ""
  // console.log(temp);

  return (
    <div className="App">
      <HeaderNav />
      <BreadCrum/>
      <SubCategoery />
      <DesCard />
    </div>
  );
}

export default App;
