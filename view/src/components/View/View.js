/* eslint-disable import/no-anonymous-default-export */
import { Engine, Scene, SceneLoader, MeshBuilder, HemisphericLight, ArcRotateCamera, Vector3 } from "@babylonjs/core";
import React, { useEffect, useRef } from "react";
import '@babylonjs/loaders/glTF';

export default (props) => {

  const reactCanvas = useRef(null);
  const {antialias, engineOptions, adaptToDeviceRatio, sceneOptions, modelUrl, modelName, ...rest} = props;

  const loadModel = (scene)=>{
    SceneLoader.ImportMesh("", modelUrl, modelName, scene, (meshes)=>{});
  }

  useEffect(() => {

    if(reactCanvas.current){

        const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);
        const canvas = scene.getEngine().getRenderingCanvas();

        const camera = new ArcRotateCamera("Camera", 0, 0, 10, new Vector3(0, 0, 0), scene);
        camera.setPosition(new Vector3(100, 100, 300));
        camera.attachControl(canvas, true);

        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        loadModel(scene);

        engine.runRenderLoop(() => {
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        if(window){
        window.addEventListener("resize", resize);
        }

        return () => {
        scene.getEngine().dispose();
        if(window){
            window.removeEventListener("resize", resize);
        }
        };

    }
  });

  return <canvas ref={reactCanvas} {...rest} />;

};
