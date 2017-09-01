import PropTypes from 'prop-types';

const Name = ({ name, className }) => (<span className={`name ${className}`}>
  <style jsx global>{`
   .name {
      color: #fff;
      font-weight: 800;
    }
  `}</style>
  {name || '(the other player did not set a name yet)'}
</span>);

Name.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Name;
