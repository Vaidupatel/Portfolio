import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "@react-three/drei";
import countries from "../../assets/globe.json";
import { Canvas, extend, useThree } from "@react-three/fiber";
import ThreeGlobeWrapper from "./ThreeGlobeWrapper";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

// export function Globe({ globeConfig, data }) {
//   const [globeData, setGlobeData] = useState(null);

//   const globeRef = useRef(null);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial();
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     let points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color);
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) => ["lat", "lng"].every((k) => v2[k] === v[k])) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor((e) => {
//           return defaultProps.polygonColor;
//         });
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => d.startLat * 1)
//       .arcStartLng((d) => d.startLng * 1)
//       .arcEndLat((d) => d.endLat * 1)
//       .arcEndLng((d) => d.endLng * 1)
//       .arcColor((e) => e.color)
//       .arcAltitude((e) => {
//         return e.arcAlt * 1;
//       })
//       .arcStroke((e) => {
//         return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
//       })
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => e.order * 1)
//       .arcDashGap(15)
//       .arcDashAnimateTime((e) => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e) => (t) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeRef.current, globeData]);

//   return (
//     <>
//       <ThreeGlobe ref={globeRef} />
//     </>
//   );
// }

export function Globe({ globeConfig, data }) {
  const globeRef = useRef(null);
  const { camera } = useThree();

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      globe
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(globeConfig.showAtmosphere)
        .atmosphereColor(globeConfig.atmosphereColor)
        .atmosphereAltitude(globeConfig.atmosphereAltitude)
        .hexPolygonColor(() => globeConfig.polygonColor);

      globe
        .arcsData(data)
        .arcStartLat((d) => d.startLat)
        .arcStartLng((d) => d.startLng)
        .arcEndLat((d) => d.endLat)
        .arcEndLng((d) => d.endLng)
        .arcColor((d) => d.color)
        .arcAltitude((d) => d.arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
        .arcDashLength(globeConfig.arcLength)
        .arcDashGap(15)
        .arcDashAnimateTime(() => globeConfig.arcTime);

      globe
        .pointsData(data)
        .pointColor((d) => d.color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      globe
        .ringsData([])
        .ringColor(() => (t) => t)
        .ringMaxRadius(globeConfig.maxRings)
        .ringPropagationSpeed(3)
        .ringRepeatPeriod(
          (globeConfig.arcTime * globeConfig.arcLength) / globeConfig.rings
        );
    }
  }, [globeRef.current, data, globeConfig]);

  useEffect(() => {
    if (camera) {
      camera.position.z = 300;
    }
  }, [camera]);

  return (
    <>
      <ThreeGlobeWrapper
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={280}
        maxDistance={320}
      />
    </>
  );
}
export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}