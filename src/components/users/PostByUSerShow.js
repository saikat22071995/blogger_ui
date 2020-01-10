import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function postByUserShow (props){
     
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
                {/* <Link to={`/users/${props.user.id}`}>More Posts by Author:{props.user.name}</Link> */}
            </div> 
        )
}
const mapStatetoProps=(state,props)=>{
    const id=props.match.params.id
    console.log(id)
    const post=state.posts.find(post=>post.id===parseInt(id))
    console.log(post)
    //console.log(...post.userId)
    //console.log(Object.getOwnPropertySymbols())
    //console.dir(post.get('userId'))
    return{
        user:state.users.find(user=>user.id===parseInt(id)),
        post:post,
        comments:state.comments.filter(comment=>comment.postId===parseInt(id))
    }
}
export default connect(mapStatetoProps)(postByUserShow)