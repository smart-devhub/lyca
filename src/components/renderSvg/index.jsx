import React from 'react';
// @import components
import { ReactSVG } from 'react-svg';
//@import styles
import styles from './index.module.scss';

const SVG = ({
  icon,
  className = '',
  fullSize = false,
  onClick,
  width,
  height,
}) => {
  return (
    <ReactSVG
      beforeInjection={svg => {
        const style = [
          width ? `width: ${width};` : '',
          height ? `height: ${height};` : '',
        ]
          .filter(Boolean)
          .join(' ');
        if (style) {
          svg.setAttribute('style', style);
        }
      }}
      src={icon}
      className={`${className} ${fullSize ? styles.svgWrapper : ''}`}
      onClick={onClick}
    />
  );
};

export default SVG;
