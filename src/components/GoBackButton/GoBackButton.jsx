import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './GoBackButton.styled';


const GoBackBtn = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};


export default GoBackBtn;

GoBackBtn.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};