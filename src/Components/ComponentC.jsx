import ComponentD from "./ComponentD";

const ComponentC = (props) => {
      let component = "ComponentC";
      return (
            <div className="container">
                  <h3>
                        {component} - {props.message}
                  </h3>
                  <ComponentD />
            </div>
      );
};
export default ComponentC;
