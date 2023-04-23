import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';

import BlogsStaticPages_36 from './pages/BlogsStaticPage_36';
import HomePage_36 from './pages/HomePage_36';
import BlogsLocalJsonPage_36 from './pages/BlogsLocalJsonPage_36';
import BlogsNodeServerPage_36 from './pages/BlogsNodeServerPage_36';
import BlogsSupabasePage_36 from './pages/BlogsSupabasePage_36';

import Narbar from './components/NarbarResp_36';


function App_36() {
  return (
    <BrowserRouter>
    <Narbar/>
    <Routes>
      <Route path='/card_36' element={<BlogsStaticPages_36/>}/>
      <Route path='/local_36' element={<BlogsLocalJsonPage_36/>}/>
      <Route path='/node_36' element={<BlogsNodeServerPage_36/>}/>
      <Route path='/supabase_36' element={<BlogsSupabasePage_36/>}/>
    </Routes>
      </BrowserRouter>
    );
}

export default App_36;
