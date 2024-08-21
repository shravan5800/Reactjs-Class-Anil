import ComponentF from "./ComponentF";

const ComponentE = () => {
      let component = "ComponentE";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentF />
            </div>
      );
};
export default ComponentE;
