import ComponentW from "./ComponentW";

const ComponentV = () => {
      let component = "ComponentV";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentW />
            </div>
      );
};
export default ComponentV;
