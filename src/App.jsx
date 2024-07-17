// import { BrowserRouter } from "react-router-dom";
// // import { Canvas } from "@react-three/fiber";

// import { About, Experience, Hero, Navbar } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           {/* <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
//             <color attach="background" args={["#ececec"]} />
//             <Hero />
//           </Canvas> */}
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { About, Experience, Hero, Navbar } from "./components";
// import { Avatar } from "./components/canvas/Avatar";
// import { Environment } from "@react-three/drei";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <div className="avatar-container">
//           <Canvas shadows camera={{ position: [2, 2, 4], fov: 42 }}>
//             <group position={[0, -2.1, 0]}>
//               <Avatar scale={[1.1, 1.1, 1.1]} />
//             </group>
//             {/* <Environment preset="dawn" /> */}
//           </Canvas>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


// import { BrowserRouter } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { About, Experience, Hero, Navbar } from "./components";
// import { Avatar } from "./components/canvas/Avatar";
// import { Environment } from "@react-three/drei";
// // import { Environment } from "@react-three/drei";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <div className="avatar-container">
//           <Canvas shadows camera={{ position: [2, 2, 4], fov: 42 }}>
//             <group position={[0, -2.1, 0]}>
//               <Avatar scale={[1.1, 1.1, 1.1]} />
//             </group>
//             {/* <Environment preset="sunset" /> */}
//             <ambientLight intensity={1.2}/>
//           </Canvas>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { About, Experience, Hero, Navbar } from "./components";
import { Avatar } from "./components/canvas/Avatar";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        <Routes>
          <Route path="/" element={
            <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
              <Hero />
              <About />
              <Experience />
              <div className="avatar-container">
                <Canvas shadows camera={{ position: [2, 2, 4], fov: 42 }}>
                  <group position={[0, -2.1, 0]}>
                    <Avatar scale={[1.1, 1.1, 1.1]} />
                  </group>
                  <ambientLight intensity={1.2} />
                  {/* <Environment preset="sunset"/> */}
                </Canvas>
              </div>
            </>
          } />
          <Route path="/course-details" element={<CourseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
