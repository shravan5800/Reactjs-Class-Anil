import ComponentT from "./ComponentT";

const ComponentS = () => {
      let component = "ComponentS";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentT />
            </div>
      );
};
export default ComponentS;
