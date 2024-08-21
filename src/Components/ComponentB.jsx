import ComponentC from "./ComponentC";

const ComponentB = () => {
      let component = "ComponentB";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentC />
            </div>
      );
};
export default ComponentB;
