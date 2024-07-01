import { useState } from "react";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container  p-6  bg-dark-subtle text-dark-emphasis " >
        <h4 className="text-primary p-2 mt-4">Filter Table Data</h4>
        <form className="col-md-5">
          <input
            type="text" className="form-control"
            placeholder="search Text"
            onChange={(e) => setSearch(e.target.value)}
          />
         </form>
          <table className="table table-bordered table-striped mt-3">
            <thead>
              <tr>
                <th>S.No </th>
                <th>First Name </th>
                <th>Last Name </th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search === ""? item:
                  item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.email.toLowerCase().includes(search.toLowerCase())||
                  item.phone.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                     <td>{index+1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
      
      </div>
    </>
  );
}

export default App;
