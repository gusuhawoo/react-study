import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        // setPosition({ x: e.clientX, y: e.clientY });
        // setX(e.clientX);
        // setY(e.clientY);
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      />
    </div>
  );
}
