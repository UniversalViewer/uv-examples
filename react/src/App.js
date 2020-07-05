import React, {
  useRef,
  useLayoutEffect
} from "react";
import "./styles.css";
import { init } from "universalviewer";

const UV = ({manifest, width = '100vw', height = '100vh'}) => {
  const el = useRef();

  useLayoutEffect(() => {

    const uv = init(el.current,
      {
        manifestUri: manifest
      });

    uv.on('created', () => {
      uv.resize();
    }, false);

  }, [manifest]);

  return <div ref={el} id="uv" className="uv" style={{
    width: width,
    height: height
  }} />;
};

export default function App() {
  return (
    <UV manifest="https://wellcomelibrary.org/iiif/b18035723/manifest"  />
  );
}
