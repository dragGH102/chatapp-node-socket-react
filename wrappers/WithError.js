const WithError = ({ error }) => (<div>
  <Child />
  <div className="error">{error}</div>

  <style jsx>{`
    .error {
      color: #f00;
    }
  `}</style>
</div>);

WithError.propTypes = {
  error: PropTypes.string,
};

export default WithError;
