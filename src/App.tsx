import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PostsList } from './features/posts/PostsList'
import { Navbar } from './components/Navbar'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          ></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
