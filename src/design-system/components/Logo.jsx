import React from 'react';
import { useTheme } from '../../services/theme-context';
import logotypeDark from '../../assets/logo/logotype-dark.svg';
import logotypeLight from '../../assets/logo/logotype-light.svg';

/**
 * Logo component that automatically switches between light and dark variants
 * based on the current theme.
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {number} [props.width] - Width of the logo (maintains aspect ratio)
 * @param {string} [props.alt] - Alt text for the logo
 */
const Logo = ({ 
  className = '', 
  width = 120, 
  alt = 'Pacelane Design Logo'
}) => {
  const { isDark } = useTheme();
  
  return (
    <img
      src={isDark ? logotypeDark : logotypeLight}
      alt={alt}
      width={width}
      className={className}
      style={{ height: 'auto' }}
    />
  );
};

export default Logo; 