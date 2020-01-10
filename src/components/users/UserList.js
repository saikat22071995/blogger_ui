import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function UserList(props){
        return (
            <div>
                <h2> Listing Users - { props.users.length } </h2>
                <ul>
                    { props.users.map(function(user){
                        return <li key={user.id}> <Link to={`/users/${user.id}`}>{ user.name }</Link> </li>
                    })}
                </ul>
            </div> 
        )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UserList)