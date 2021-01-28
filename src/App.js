import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Login } from './features/login/Login';
import { Dashboard } from './features/home/Dashboard';
import { Header } from './features/header/Header';
import { Post } from './features/postsList/post/Post';
import { LoginFn } from './actions/userActions';
import { auth } from './firebase';
import { PostsList } from './features/postsList/PostsList';
import { CreatePost } from './features/create-post/CreatePost';

function App() {

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(LoginFn(
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
        ))
      }
    })
  })





  return (
    <Router>
      {!user ? (<Login />)
        : (
          <>
            <Header />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/post  ' exact component={CreatePost} /> 
              <Route path='/posts' exact component={PostsList} />
              <Route path='/posts/post' exact component={Post} />
            </Switch>

          </>)}
    </Router>
  );
}

export default App;
