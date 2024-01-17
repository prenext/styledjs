import React, { ReactNode } from "react";

interface DecorateProps {
  gradient?: string;
  bgColor?: string;
  color?: string;
  shadow?: string;
  child: ReactNode;
}

const Decorate: React.FC<DecorateProps> = ({
  gradient,
  bgColor,
  color,
  shadow,
  child,
}) => {
  const style: React.CSSProperties = {
    background: gradient ? `linear-gradient(${gradient})` : bgColor,
    color: color,
    boxShadow: shadow,
  };

  return React.cloneElement(child as React.ReactElement, { style });
};

export default Decorate;
