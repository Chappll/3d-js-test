import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './styles.css';

function Box() {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="seafoamggreen" />
    </mesh>
  );
}

function App() {
  return (

    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Plane />
      <Box />
    </Canvas>

  );
}

export default App;
