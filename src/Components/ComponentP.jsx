import ComponentQ from "./ComponentQ";

const ComponentP = () => {
      let component = "ComponentP";
      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentQ />
            </div>
      );
};

export default ComponentP;
