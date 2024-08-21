import ComponentJ from "./ComponentJ";

const ComponentI = () => {
      let component = "ComponentI";

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentJ />
            </div>
      );
};
export default ComponentI;
