import React from 'react';
import PropTypes from 'prop-types';

// Import all bichaurinhos SVGs
import bichaurinho1 from '../../assets/bichaurinhos/bichaurinhos-1.svg';
import bichaurinho2 from '../../assets/bichaurinhos/bichaurinhos-2.svg';
import bichaurinho3 from '../../assets/bichaurinhos/bichaurinhos-3.svg';
import bichaurinho4 from '../../assets/bichaurinhos/bichaurinhos-4.svg';
import bichaurinho5 from '../../assets/bichaurinhos/bichaurinhos-5.svg';
import bichaurinho6 from '../../assets/bichaurinhos/bichaurinhos-6.svg';
import bichaurinho7 from '../../assets/bichaurinhos/bichaurinhos-7.svg';
import bichaurinho8 from '../../assets/bichaurinhos/bichaurinhos-8.svg';
import bichaurinho9 from '../../assets/bichaurinhos/bichaurinhos-9.svg';
import bichaurinho10 from '../../assets/bichaurinhos/bichaurinhos-10.svg';
import bichaurinho11 from '../../assets/bichaurinhos/bichaurinhos-11.svg';
import bichaurinho12 from '../../assets/bichaurinhos/bichaurinhos-12.svg';
import bichaurinho13 from '../../assets/bichaurinhos/bichaurinhos-13.svg';
import bichaurinho14 from '../../assets/bichaurinhos/bichaurinhos-14.svg';
import bichaurinho15 from '../../assets/bichaurinhos/bichaurinhos-15.svg';
import bichaurinho16 from '../../assets/bichaurinhos/bichaurinhos-16.svg';
import bichaurinho17 from '../../assets/bichaurinhos/bichaurinhos-17.svg';
import bichaurinho18 from '../../assets/bichaurinhos/bichaurinhos-18.svg';
import bichaurinho19 from '../../assets/bichaurinhos/bichaurinhos-19.svg';
import bichaurinho20 from '../../assets/bichaurinhos/bichaurinhos-20.svg';
import bichaurinho21 from '../../assets/bichaurinhos/bichaurinhos-21.svg';
import bichaurinho22 from '../../assets/bichaurinhos/bichaurinhos-22.svg';
import bichaurinho23 from '../../assets/bichaurinhos/bichaurinhos-23.svg';
import bichaurinho24 from '../../assets/bichaurinhos/bichaurinhos-24.svg';
import bichaurinho25 from '../../assets/bichaurinhos/bichaurinhos-25.svg';
import bichaurinho26 from '../../assets/bichaurinhos/bichaurinhos-26.svg';
import bichaurinho27 from '../../assets/bichaurinhos/bichaurinhos-27.svg';
import bichaurinho28 from '../../assets/bichaurinhos/bichaurinhos-28.svg';
import bichaurinho29 from '../../assets/bichaurinhos/bichaurinhos-29.svg';
import bichaurinho30 from '../../assets/bichaurinhos/bichaurinhos-30.svg';
import bichaurinho31 from '../../assets/bichaurinhos/bichaurinhos-31.svg';
import bichaurinho32 from '../../assets/bichaurinhos/bichaurinhos-32.svg';
import bichaurinhoDefault from '../../assets/bichaurinhos/bichaurinhos.svg';

const variants = {
  1: bichaurinho1,
  2: bichaurinho2,
  3: bichaurinho3,
  4: bichaurinho4,
  5: bichaurinho5,
  6: bichaurinho6,
  7: bichaurinho7,
  8: bichaurinho8,
  9: bichaurinho9,
  10: bichaurinho10,
  11: bichaurinho11,
  12: bichaurinho12,
  13: bichaurinho13,
  14: bichaurinho14,
  15: bichaurinho15,
  16: bichaurinho16,
  17: bichaurinho17,
  18: bichaurinho18,
  19: bichaurinho19,
  20: bichaurinho20,
  21: bichaurinho21,
  22: bichaurinho22,
  23: bichaurinho23,
  24: bichaurinho24,
  25: bichaurinho25,
  26: bichaurinho26,
  27: bichaurinho27,
  28: bichaurinho28,
  29: bichaurinho29,
  30: bichaurinho30,
  31: bichaurinho31,
  32: bichaurinho32,
  default: bichaurinhoDefault,
};

const Bichaurinho = ({ variant = 'default', size = 128, className = '', style = {} }) => {
  const selectedVariant = variants[variant] || variants.default;
  
  return (
    <img
      src={selectedVariant}
      alt={`Bichaurinho variant ${variant}`}
      width={size}
      height={size}
      className={className}
      style={{ ...style }}
    />
  );
};

Bichaurinho.propTypes = {
  variant: PropTypes.oneOf([...Object.keys(variants)]),
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Bichaurinho; 