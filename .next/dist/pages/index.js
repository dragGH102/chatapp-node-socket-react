'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Name = require('../components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Messages = require('../components/Messages');

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/manuel/WORK/general/DEMOS/kodify_chatapplication_nextjs/pages/index.js?entry';


var ChatApp = function (_React$Component) {
  (0, _inherits3.default)(ChatApp, _React$Component);

  function ChatApp() {
    (0, _classCallCheck3.default)(this, ChatApp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChatApp.__proto__ || (0, _getPrototypeOf2.default)(ChatApp)).call(this));

    _this.state = {
      name: '(the other player did not set a name yet)',
      messages: [{
        // test
        author: 'me',
        content: 'anything',
        css: null,
        id: new Date().getUTCMilliseconds()
      }, {
        // test
        author: 'other',
        content: 'anything 2',
        css: null,
        id: new Date().getUTCMilliseconds() + 1
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(ChatApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 2675249465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 2675249465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Welcome to the chat. You\'re chatting with ', _react2.default.createElement(_Name2.default, { name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement(_Messages2.default, { messages: this.state.messages, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 2675249465,
        css: '.messages-container{width:80%;list-style-type:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCeUIsQUFHcUIsVUFDVyxxQkFDdkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFudWVsL1dPUksvZ2VuZXJhbC9ERU1PUy9rb2RpZnlfY2hhdGFwcGxpY2F0aW9uX25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZSc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcodGhlIG90aGVyIHBsYXllciBkaWQgbm90IHNldCBhIG5hbWUgeWV0KScsXG4gICAgICBtZXNzYWdlczogW3tcbiAgICAgICAgLy8gdGVzdFxuICAgICAgICBhdXRob3I6ICdtZScsXG4gICAgICAgIGNvbnRlbnQ6ICdhbnl0aGluZycsXG4gICAgICAgIGNzczogbnVsbCxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0ZXN0XG4gICAgICAgIGF1dGhvcjogJ290aGVyJyxcbiAgICAgICAgY29udGVudDogJ2FueXRoaW5nIDInLFxuICAgICAgICBjc3M6IG51bGwsXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFVUQ01pbGxpc2Vjb25kcygpICsgMSxcbiAgICAgIH1dLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8aDM+V2VsY29tZSB0byB0aGUgY2hhdC4gWW91J3JlIGNoYXR0aW5nIHdpdGggPE5hbWUgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfSAvPjwvaDM+XG4gICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgIHsvKiBNYWtlIHN0eWxlcyBhdmFpbGFibGUgdG8gY2hpbGRyZW4gKi99XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAubWVzc2FnZXMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2Pik7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;