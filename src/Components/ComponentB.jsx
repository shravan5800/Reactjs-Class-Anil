import ComponentC from "./ComponentC";

const ComponentB = (props) => {
      let component = "ComponentB";
      return (
            <div className="container">
                  <h3>
                        {component} - {props?.message}
                  </h3>
                  <ComponentC message="Hello this sent from Component B" />
            </div>
      );
};
export default ComponentB;
