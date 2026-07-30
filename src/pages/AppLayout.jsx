import {Link} from "react-router-dom";
import AppNav from "../components/AppNav"

function AppLayout(){
  return (
    <div>
      <AppNav />
      <p>App</p>
      <Link to='/'>Go to Homepage</Link>
    </div>
  )
}

export default AppLayout

