import ComponentG from "./ComponentG";

const ComponentF = () => {
      let component = "ComponentF";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentG />
            </div>
      );
};

export default ComponentF;
