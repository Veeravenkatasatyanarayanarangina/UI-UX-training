import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class EmployeeList extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }
    render()
    {
        return(
            <div>
                <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Emp_id</th>
      <th scope="col">Emp_Name</th>
      <th scope="col">Emp_company</th>
      <th scope="col">Emp_Phno</th>
      <th scope="col">Emp_desg</th>
      <th scope="col">Emp_Sal</th>
    </tr>
  </thead>
  <tbody>
    {this.props.employees.map((items)=>{
    return<tr><td>{items.emp_Id}</td>
    <td>{items.emp_Name}</td>
    <td>{items.emp_Company}</td>
    <td>{items.emp_phno}</td>
    <td>{items.emp_desg}</td>
    <td>{items.emp_sal}</td>
    </tr>})}
  </tbody>
  </table>
            </div>
        )
    }
}
export default EmployeeList