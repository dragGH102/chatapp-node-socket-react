import PropTypes from 'prop-types';

const Name = ({ name, className }) => (<span className={className}>
  <style jsx global>{`
      position: fixed;
      margin-right: 20px;
      bottom: 0;
      color: #0000cc;
  `}</style>
  {name || '(the other player did not set a name yet)'}
</span>);

Name.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Name;
