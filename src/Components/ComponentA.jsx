import { useEffect } from "react";
import ComponentB from "./ComponentB";
import { useState } from "react";

const ComponentA = () => {
      let component = "This is Component A";
      const [userData, setUserData] = useState([]);

      useEffect(() => {
            fetchUser();
      }, []);

      const fetchUser = async () => {
            try {
                  const URL = "https://jsonplaceholder.typicode.com/users";
                  const response = await fetch(URL);
                  const data = await response.json();
                  setUserData(data);
            } catch (error) {
                  console.error("Error on fetching:", error);
            }
      };

      return (
            <div className="container">
                  <h3>{component}</h3>
                  <ComponentB message="Hello from Component-A" />
                  <ul className="list-group col-6">
                        <li className="list-group-item active" aria-current="true">
                              An active item
                        </li>
                        {userData.map((user) => (
                              <li className="list-group-item" key={user?.id}>
                                    {user?.name} from {user?.address?.street}
                              </li>
                        ))}
                  </ul>
                  <table className="table table-striped">
                        <thead className="table-warning">
                              <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Street and City</th>
                                    <th scope="col">Delete</th>
                              </tr>
                        </thead>
                        <tbody>
                              {userData.map((user) => (
                                    <tr key={user?.id}>
                                          <th scope="row">{user?.id}</th>
                                          <td>{user?.name}</td>
                                          <td>{user?.username}</td>
                                          <td>{user?.email}</td>
                                          <td>
                                                {user?.address?.street}, {user?.address?.city}
                                          </td>
                                          <td className="d-grid">
                                                <button className="btn btn-dark">Delete</button>
                                          </td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};
export default ComponentA;
