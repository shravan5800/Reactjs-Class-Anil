import ComponentB from "./ComponentB";

const ComponentA = () => {
      let component = "This is Component A";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentB />
            </div>
      );
};
export default ComponentA;
