import ComponentZ from "./ComponentZ";

const ComponentY = () => {
      let component = "ComponentY";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentZ />
            </div>
      );
};

export default ComponentY;
