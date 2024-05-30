import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './Components/Header';
import FooterCom from './Components/Footer';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import ImageUploader from './pages/MulImages';
import AdminPrivateRoute from './Components/AdminPrivateRoute';
import CreatPost from './pages/CreatPost';
import UpdatePost from './pages/UpdatePost';
import PageContent from './pages/PageContent';
import PostPage from './pages/PostPage';
import Share from './pages/Share';
import ScrollToTop from './Components/ScrollToTop';
import Search from './pages/Search';
import Images from './pages/Images';
import DeleteCloudinary from './pages/DeleteCloudinary';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* <Route path='/multiple' element={<ImageUploader />} /> */}
        <Route path='/pagecontent' element={<PageContent />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/share' element={<Share />} />
        <Route path='/search' element={<Search />} />
        <Route path='/images' element={<Images />} />
        <Route path='/cloudinarr' element={<DeleteCloudinary />} />

        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path='/creat-post' element={<CreatPost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />

        </Route>

      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}

export default App
