import React from "react";

export class Company extends React.Component
{
    constructor()
    {
        super()

        this.state =
        {
            company :[
                {
                    name:"motivity",
                    id :"123"
                }
            ]
      
         }
    }

    render()
    {
        return(
            <div>
                <table className="table table-striped table-hover">
                   
                        <tr>
                        <th>name</th>
                        <th>id</th>
                        </tr>
                    
                        {
                            this.state.company.map((c)=>(
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.id}</td>
                                </tr>
                            )
                            )
                        }
                    

                </table>
            </div>
        );
    }

}
