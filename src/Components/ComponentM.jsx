import ComponentN from "./ComponentN";

const ComponentM = () => {
      let component = "ComponentM";

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentN />
            </div>
      );
};

export default ComponentM;
