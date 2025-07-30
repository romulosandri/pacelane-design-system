import React from 'react';
import symbol from '../../assets/logo/symbol.svg';

/**
 * LogoSymbol component for the symbol/icon version of the Pacelane logo
 * Used primarily in collapsed navigation states.
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {number} [props.size] - Size of the symbol (both width and height)
 * @param {string} [props.alt] - Alt text for the symbol
 */
const LogoSymbol = ({ 
  className = '', 
  size = 32, 
  alt = 'Pacelane Symbol'
}) => {
  return (
    <img
      src={symbol}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain'
      }}
    />
  );
};

export default LogoSymbol;