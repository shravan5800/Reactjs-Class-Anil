import ComponentO from "./ComponentO";

const ComponentN = () => {
      let component = "ComponentN";

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentO />
            </div>
      );
};
export default ComponentN;
