/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mclaren.glb 
Author: iSteven (https://sketchfab.com/OneSteven)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/mclaren-mp4-12c-a53f76d67c3a4184896a47a1af9e07d1
Title: McLaren MP4-12C
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mclaren(props) {
  const { nodes, materials } = useGLTF("/mclaren.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[140.826, 82.771, 204.108]}
        rotation={[-Math.PI / 2, 0, 0.297]}
        scale={100}
      >
        <mesh
          geometry={nodes.wheel_tire_0.geometry}
          material={materials.tire}
        />
        <mesh
          geometry={nodes.wheel_bhrome_0.geometry}
          material={materials.bhrome}
        />
        <mesh
          geometry={nodes.wheel_mirror_0.geometry}
          material={materials.mirror}
        />
        <mesh
          geometry={nodes.wheel_disc_0.geometry}
          material={materials.disc}
        />
      </group>
      <group
        position={[140.896, 81.779, -246.724]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh
          geometry={nodes.wheel001_tire_0.geometry}
          material={materials.tire}
        />
        <mesh
          geometry={nodes.wheel001_bhrome_0.geometry}
          material={materials.bhrome}
        />
        <mesh
          geometry={nodes.wheel001_mirror_0.geometry}
          material={materials.mirror}
        />
        <mesh
          geometry={nodes.wheel001_disc_0.geometry}
          material={materials.disc}
        />
      </group>
      <group
        position={[-140.871, 82.771, 204.413]}
        rotation={[-Math.PI / 2, 0, 0.297]}
        scale={100}
      >
        <mesh
          geometry={nodes.wheel002_tire_0.geometry}
          material={materials.tire}
        />
        <mesh
          geometry={nodes.wheel002_bhrome_0.geometry}
          material={materials.bhrome}
        />
        <mesh
          geometry={nodes.wheel002_mirror_0.geometry}
          material={materials.mirror}
        />
        <mesh
          geometry={nodes.wheel002_disc_0.geometry}
          material={materials.disc}
        />
      </group>
      <mesh
        geometry={nodes.mesh_light_0.geometry}
        material={materials.light}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vert_cali_0.geometry}
        material={materials.cali}
        position={[138.831, 82.771, 204.717]}
        rotation={[-Math.PI / 2, 0, 0.297]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vert001_cali_0.geometry}
        material={materials.cali}
        position={[138.761, 81.779, -246.724]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vert002_cali_0.geometry}
        material={materials.cali}
        position={[-140.871, 82.771, 204.413]}
        rotation={[-Math.PI / 2, 0, 0.297]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh001_paint_0.geometry}
        material={materials.paint}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh002_glass_0.geometry}
        material={materials.glass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh003_grill_0.geometry}
        material={materials.grill}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh004_mlack_0.geometry}
        material={materials.mlack}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh005_bumpa_0.geometry}
        material={materials.bumpa}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh006_red_0.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh007_mirror_0.geometry}
        material={materials.mirror}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh008_glass_l_0.geometry}
        material={materials.glass_l}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh009_glack_0.geometry}
        material={materials.glack}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh010_xenon_0.geometry}
        material={materials.xenon}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh011_bhrome_0.geometry}
        material={materials.bhrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.mesh012_bhrome_d_0.geometry}
        material={materials.bhrome_d}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/mclaren.glb");