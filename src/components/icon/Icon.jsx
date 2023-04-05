import sprite from "../../images/symbol-defs.svg";

export const Icon = ({ name, width = 24, height = 24, fill = "inherit" }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${name}`} fill={fill} />
    </svg>
  );
};
