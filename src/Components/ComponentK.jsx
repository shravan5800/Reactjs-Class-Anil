import ComponentL from "./ComponentL";

const ComponentK = () => {
      let component = "ComponentK";

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentL/>
            </div>
      );
};
export default ComponentK;
