import { Color, Vector3 } from 'three';

const hexToRgb = (hex) => {
  const color = new Color(hex);

  return new Vector3(color.r, color.g, color.b);
};
export default hexToRgb;
