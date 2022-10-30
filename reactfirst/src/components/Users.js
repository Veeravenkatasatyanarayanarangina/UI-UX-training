import React from "react";

export class User extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            user :[
                {
                    userId: "satya@gmail.com",
                    userpassword:"satya@1999"
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
                        <th>username</th>
                        <th>password</th>
                    </tr>
                {this.state.user.map((u)=>
                (
                    <tr>
                        <td>{u.userId}</td>
                        <td>{u.userpassword}</td>
                    </tr>
                    
                ))};
                </table>
            </div>
        )
    }

}