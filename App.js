import EmployeeDetails from "./components/EmployeeDetails";
import axios from "axios";
import {useEffect,useState} from "react";


function App() {

  const [details,setDetails] = useState({});

  const employeeUserInfo = async()=>{
   const {data }=  await axios.get("https://randomuser.me/api");
   const details = data.results[0];
  setDetails(details)
  }
  
   useEffect(() => {
    employeeUserInfo();
  }, []);
  
  return (
    <div className="App">
      <EmployeeDetails details = {details}/>
    </div>
  );
}

export default App;
