import React from 'react';

import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import WorkingCard from '../components/WorkingCard';


function Home() {
  return (
    <div>
      <Navbar />
      
      <Heroimg />
      <WorkingCard/>
      <Footer/>
      
    </div>
  );
}

export default Home