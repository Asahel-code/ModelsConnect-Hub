import PropTypes from 'prop-types';

const Wrapper = ({ children, className, ...rest }) => {
  return (
    <div className={`rounded-xl bg-white p-3 my-2 ${className}`} {...rest}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Wrapper