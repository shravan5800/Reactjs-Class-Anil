import ComponentY from "./ComponentY";

const ComponentX = () => {
      let component = "ComponentX";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentY />
            </div>
      );
};
export default ComponentX;
