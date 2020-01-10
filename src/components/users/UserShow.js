import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function  UserShow(props){
        return(
            <div>
                {
                    props.user && props.post && (
                        <div>
                            <h2>user Name--{props.user.name}</h2>
                            <h3>POST WRITTEN BY USERS</h3>
                            {
                                <ol>
                                { props.post.map(function(post){
                                    return <li key={post.id}><Link to={`/posts/${post.id}`}> { post.title }</Link> </li>
                                })}
                            </ol>
                            }
                        </div>
                    )
                }
                <Link to="/users">Back</Link>

                </div>
        )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        user:state.users.find(user=>user.id===parseInt(id)),
        post:state.posts.filter(post=>post.userId===parseInt(id))
    }
}
export default connect(mapStateToProps)(UserShow)