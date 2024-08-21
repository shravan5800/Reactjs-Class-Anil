import ComponentA from "./Components/ComponentA";
import Header from "./Header";

const App = () => {
      const navItems = ["Home", "Contact", "About", "Login", "Register"];
      return (
            <div className="container">
                  <Header items={navItems} />
                  <h2>Hello... world</h2>
                  <ComponentA />
                  <button className="btn btn-warning">Click here</button>
            </div>
      );
};

export default App;
