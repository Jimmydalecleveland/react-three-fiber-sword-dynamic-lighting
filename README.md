# React Three Fiber dynamic lighting on sword example in Next.js

This is a quick demo of different dynamic lighting using HDRIs (panoramic photos) as the lighting source on a reflective 3D model. In this case I am using "Sting", Bilbo's sword from The Hobbit.

Here is a screenshot of the site.
![](./react-three-sword-lighting.png)

The tools/tech used:

- [`three.js`](https://github.com/mrdoob/three.js/) - Very popular 3D graphics and animation library.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) - A react renderer for Three.js
- [`@react-three/drei`](https://github.com/pmndrs/drei) - helpers for `@react-three/fiber`, such as lighting and draggable controls.
- [https://sketchfab.com/](https://sketchfab.com/) for finding models
- [https://polyhaven.com/](https://polyhaven.com/) for HDRIs
- [`gltf-pipeline`](https://github.com/CesiumGS/gltf-pipeline) to compress the model file (draco 10 for max compression). Usually a 10x reduction in size.
- [`gltfjsx`](https://github.com/pmndrs/gltfjsx) - You can run `npx gltfjsx ./your-file.glb` to output the mesh layers as JSX which saves you a lot of time.
