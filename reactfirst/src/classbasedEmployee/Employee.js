import 'bootstrap/dist/css/bootstrap.min.css';
import React,{lazy,Suspense} from "react";
//import EmployeeList from './EmployeeList';
const EmployeeList =lazy(()=>import("./EmployeeList"));

class Employees extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            emp_Id:'',
            emp_Name:'',
            emp_Company:'',
            emp_phno:'',
            emp_desg:'',
            emp_sal:'',
            employees:[]
        }

    }

    saveEmployee(event){
        event.preventDefault();
        let employees = this.state.employees;
        let employee = {
            emp_Id:this.state.emp_Id,
            emp_Name:this.state.emp_Name,
            emp_Company:this.state.emp_Company,
            emp_phno:this.state.emp_phno,
            emp_desg:this.state.emp_desg,
            emp_sal:this.state.emp_sal
        }
        employees.push(employee);
        this.setState({employees:employees});

       

    }
    changeId(event)
    {
        this.setState({emp_Id:event.target.value})
    }
    changeName(event)
    {
        this.setState({emp_Name:event.target.value})
    }
    changeCompany(event)
    {
        this.setState({emp_Company:event.target.value})
    }
    changePhno(event)
    {
        this.setState({emp_phno:event.target.value})
    }
    changeDesg(event)
    {
        this.setState({emp_desg:event.target.value})
    }
    changeSal(event)
    {
        this.setState({emp_sal:event.target.value})
    }



    render()
    {
        return(
           <div>
            <h1>Employee Registartion</h1>
            <form>
            <table>
                <tr>
                    <td><label>Employee id</label></td>
                    <td>:</td>
                    <td><input type="text"  name="eid" value={this.state.emp_Id} onChange={(e)=>this.changeId(e)}></input></td>
                </tr>
                <tr>
                    <td><label>Employee Name</label></td>
                    <td>:</td>
                    <td><input type = "text" name ="ename" value = {this.state.emp_Name} onChange={(e)=>this.changeName(e)}></input></td>
                </tr>
                <tr>
                    <td><label>Employee Company </label></td>
                    <td>:</td>
                    <td><input type = "text" name = "ecompany" value={this.state.emp_Company} onChange = {(e)=>this.changeCompany(e)}></input></td>
                </tr>
                <tr>
                    <td><label>Employee Phone number</label></td>
                    <td>:</td>
                    <td><input type = "number" name = "empphno" value = {this.state.emp_phno} onChange={(e)=>this.changePhno(e)}></input></td>
                </tr>
                <tr>
                    <td><label>Employee designation</label></td>
                    <td>:</td>
                    <td><input type = "text" name = "desg" vlaue = {this.state.emp_desg} onChange={(e)=>this.changeDesg(e)}></input></td>
                </tr>
                <tr>
                    <td><label>Employee salary </label></td>
                    <td>:</td>
                    <td><input type="number" name = "salary" value = {this.state.emp_sal} onChange = {(e) => this.changeSal(e)}></input></td>
                </tr>
                <tr>
                    <td><input type = "reset" value = "reset"></input></td>
                    <td></td>
                    <td><input type = "submit" value = "save" onClick={(e)=>this.saveEmployee(e)}></input></td>
                </tr>
            </table>
            </form>
            <div id="listdiv">

            </div>
            <Suspense fallback ={ <div>Loading.................</div>}>
            <EmployeeList employees = {this.state.employees}/>
            </Suspense>
        
            
           </div>
          
        )
    }
    
}
export default Employees