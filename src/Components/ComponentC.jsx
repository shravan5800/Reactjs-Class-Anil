import ComponentD from "./ComponentD";

const ComponentC = () => {
      let component = "ComponentC";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentD />
            </div>
      );
};
export default ComponentC;
