import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackBtn = ({ path }) => {
  return <Link to={path}>Go back</Link>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};

export default GoBackBtn;