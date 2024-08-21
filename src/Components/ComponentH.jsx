import ComponentI from "./ComponentI";

const ComponentH = () => {
      let component = "ComponentH";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentI />
            </div>
      );
};
export default ComponentH;
