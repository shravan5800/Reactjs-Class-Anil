import ComponentH from "./ComponentH";

const ComponentG = () => {
      let component = "ComponentG";

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentH />
            </div>
      );
};

export default ComponentG;
