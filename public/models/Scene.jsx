/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: matousekfoto (https://sketchfab.com/matousekfoto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-globe-98d2b04d46474bafb4250cc75dc583b3
Title: Earth Globe 🌍
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.177, -20.679, 0]} rotation={[Math.PI / 2, -0.462, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.meshNode_Material_u1_v1_0.geometry} material={materials.Material_u1_v1} />
          <mesh geometry={nodes.meshNode_Material_u2_v1_0.geometry} material={materials.Material_u2_v1} />
          <mesh geometry={nodes.meshNode_Material_u1_v2_0.geometry} material={materials.Material_u1_v2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
