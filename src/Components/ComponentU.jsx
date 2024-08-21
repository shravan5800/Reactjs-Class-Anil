import ComponentV from "./ComponentV";

const ComponentU = () => {
      let component = "ComponentU";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentV />
            </div>
      );
};
export default ComponentU;
