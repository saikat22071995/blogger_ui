import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function UserPostShow (props){
     
    return (
            <div>         
                {
                   
                    props.post  &&(
                        <div>
                            <h2>USER NAME:{props.user?props.user.name:''}</h2>
                            <h3>Title: {props.post.title}</h3>
                            <h4>Body: <br /><br />{props.post.body}</h4>
                            <hr />
                            <h3>Comments:</h3>
                            <ol>
                                {
                                    props.comments.map((comment)=>{
                                        return(
                                            <li key={comment.id}>{comment.body}</li>
                                        )
                                    })
                                }
                            </ol>    
                        </div>
                    )
                }
                <hr />
                <Link to={`/users/${props.user?props.user.id:''}`}>More Posts by Author:{props.user?props.user.name:''}</Link>
            </div> 
        )
}
const mapStatetoProps=(state,props)=>{
    const id=props.match.params.id
    console.log(id)
    const post=state.posts.find(post=>post.id===parseInt(id))
    if(post){
        return {
            post,
            user:state.users.find(user=>user.id==post.userId),
            comments:state.comments.filter(comment=>comment.postId==id)
        }
    }
    
}
export default connect(mapStatetoProps)(UserPostShow)