import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';
import NavigationTab from '../NavigationTab';

function LandingPage() {
  return (
    <>
    <NavigationTab />
        <Routes>
          <Route exact path="/" element={<PageOne/>}></Route>
          <Route path="/page-two" element={<PageTwo/>}></Route>
          <Route path="/page-three" element={<PageThree/>}></Route>
        </Routes>
    </>
  );
}

export default LandingPage;