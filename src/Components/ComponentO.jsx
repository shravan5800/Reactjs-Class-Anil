import ComponentP from "./ComponentP";

const ComponentO = () => {
      let component = "ComponentO";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentP />
            </div>
      );
};

export default ComponentO;
