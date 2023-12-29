import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, OrthographicCamera, Stage } from "@react-three/drei";
import { Iron_man } from "./components/Iron_man";

const Container = styled.div`
  height: 100vh;
  // scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./image/img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
  }
`;

function App() {
  const scroll = (e) => {
    setHeight(e.target.scrollTop + e.target.clientHeight / 2);
    console.log("e", e.target.scrollTop);
  };
  const [height, setHeight] = useState(10);

  return (
    <Container>
      {/* <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.1}>
            <ambientLight />
            <directionalLight intensity={8} position={[0, 50, 50]} />
            <OrthographicCamera makeDefault position={[-180, 20, 50]} />
            <Iron_man />
          </Stage>
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            rotation={false}
          />
        </Suspense>
      </Canvas> */}
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
