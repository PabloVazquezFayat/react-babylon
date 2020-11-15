import './App.css';
import React from 'react';
import SceneComponent from './components/View/View'; 


const App = ()=> (
  <div className="app-root">
    <SceneComponent 
      antialias 
      id='my-canvas' 
      modelUrl ='https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/'
      modelName = 'Buggy.gltf'
    />
    <SceneComponent 
      antialias 
      id='my-canvas' 
      modelUrl ='https://playground.babylonjs.com/scenes/BrainStem/'
      modelName = 'BrainStem.gltf'
    />
    {/* <SceneComponent antialias id='my-canvas' /> */}
  </div>
)

export default App;
