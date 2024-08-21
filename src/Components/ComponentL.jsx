import ComponentM from "./ComponentM";

const ComponentL = () => {
      let component = "ComponentL";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentM />
            </div>
      );
};

export default ComponentL;
