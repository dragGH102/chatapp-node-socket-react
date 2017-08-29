'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/manuel/WORK/general/DEMOS/kodify_chatapplication_nextjs/components/Name.js';


var Name = function Name(_ref) {
  var name = _ref.name;
  return _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, name);
};

Name.props = {
  name: _propTypes2.default.string.isRequired
};

exports.default = Name;