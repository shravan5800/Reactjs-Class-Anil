import ComponentS from "./ComponentS";

const ComponentR = () => {
      let component = "ComponentR";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentS />
            </div>
      );
};
export default ComponentR;
