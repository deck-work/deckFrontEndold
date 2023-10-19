import React, { useEffect } from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import Reveal from 'reveal.js';
import 'reveal.js/plugin/notes/notes.js'; // Optional: Include any additional plugins you want to use

const PresentationViewer = () => {
  useEffect(() => {
    // Initialize Reveal.js when the component mounts
    Reveal.initialize({
      
      // plugins: [ RevealNotes ],
      ccontrols: true, 
      progress: true, // Display a progress bar
      center: true, // Center the slides vertically and horizontally
      hash: true, 
      transition: "slide", 
      overview: true, 
      slideNumber: 'c/t'
    });
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {/* Add your slides here */}
        <section>This is a sample Slide</section>
      <section>Weclome here </section>
        <section>Slide 3 Content</section> 
      <section>Slide 4 Content</section>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default PresentationViewer;
