import ComponentF from "./ComponentF";

const ComponentE = (props) => {
      let component = "ComponentE";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <h5>{props.children}</h5>
                  <ComponentF />
            </div>
      );
};
export default ComponentE;
