import React from 'react';
import  {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import UserPost from './components/users/UserPost'
import UserPostShow from './components/users/UserPostShow'
//import PostByUSerShow from './components/users/PostByUSerShow'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>Blogger</h2>
      <p>
        <Link to="/">Home</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/posts">Posts</Link>
      </p>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path="/users/:id" component={UserShow} />
      <Route path="/posts" component={UserPost} exact={true}/>
      <Route path="/posts/:id" component={UserPostShow} />
      {/* <Route path="/posts?userId:id" component={PostByUSerShow}  /> */}
      
      </div>
    </BrowserRouter>
  );
}

export default App;
