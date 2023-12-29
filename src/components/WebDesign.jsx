import {
  OrbitControls,
  OrthographicCamera,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { AmbientLight } from "three";
import { Mclaren } from "./Mclaren";
// import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          {/* <Stage environment="city" intensity={0.5}> */}
          <ambientLight />
          <directionalLight intensity={11} position={[50, 50, 50]} />
          <OrthographicCamera makeDefault position={[100, 100, 500]} />
          <Mclaren />
          {/* </Stage> */}
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      {/* <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc> */}
    </>
  );
};

export default WebDesign;
