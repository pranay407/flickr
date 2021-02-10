import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Groups from "./app/components/Groups/Groups";
import Gallery from "./app/components/Gallery/Gallery";
import SearchBar from "./app/components/SearchBar/SearchBar";
import Header from "./app/components/Header/Header";
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/groups" component={Groups}></Route>
    //     <Route exact path="/gallery" component={Gallery}></Route>
    //   </Switch>
    // </Router>
    <>
      <Header />
      <SearchBar />
    </>
  );
}

export default App;
