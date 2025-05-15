import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Sidbar/Layout';
import React from 'react';
import Course from './pages/Course';
import Banner from './pages/Banner';
import CourseDisplay from './pages/CourseDisplay';
import Bannerdisplay from './pages/Bannerdisplay';
import QueryDisplay from './pages/QueryDisplay';
import SuccessStory from './pages/SuccessStory';
import SucessStroydisplay from './pages/SucessStroydisplay';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/courses" element={<Course/>}/>
        <Route path='/banner' element={<Banner/>}/>
        <Route path='/allcourse' element={<CourseDisplay/>}/>
        <Route path='/allbanner' element={<Bannerdisplay/>}/>
        <Route path='/allquerydisplay' element={<QueryDisplay/>}/>
        <Route path="/sucessStory"  element={<SuccessStory/>}/>
        <Route path="/sucessStorydisplay" element={<SucessStroydisplay/>}/>


        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
