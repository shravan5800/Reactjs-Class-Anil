import ComponentE from "./ComponentE";

const ComponentD = () => {
      let component = "ComponentD";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentE>Hello</ComponentE>
            </div>
      );
};
export default ComponentD;
