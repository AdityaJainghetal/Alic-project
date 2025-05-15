import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Sidbar/Layout';
import React from 'react';
import Course from './pages/Course';
import Banner from './pages/Banner';
import CourseDisplay from './pages/CourseDisplay';
import Bannerdisplay from './pages/Bannerdisplay';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/courses" element={<Course/>}/>
        <Route path='/banner' element={<Banner/>}/>
        <Route path='/allcourse' element={<CourseDisplay/>}/>
        <Route path='/allbanner' element={<Bannerdisplay/>}/>


        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
