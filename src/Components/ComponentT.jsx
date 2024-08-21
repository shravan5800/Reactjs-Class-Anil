import ComponentU from "./ComponentU";

const ComponentT = () => {
      let component = "ComponentT";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentU />
            </div>
      );
};
export default ComponentT;
