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

    // provide context to bindings
    _this.handleNewMessage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ChatApp, [{
    key: 'handleNewMessage',
    value: function handleNewMessage() {
      // TODO
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 2675249465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 2675249465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Welcome to the chat. You\'re chatting with ', _react2.default.createElement(_Name2.default, { name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_Messages2.default, { messages: this.state.messages, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(NewMessage, { handleResult: this.handleNewMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 2675249465,
        css: '.messages-container{width:80%;list-style-type:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDeUIsQUFHcUIsVUFDVyxxQkFDdkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFudWVsL1dPUksvZ2VuZXJhbC9ERU1PUy9rb2RpZnlfY2hhdGFwcGxpY2F0aW9uX25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZSc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcodGhlIG90aGVyIHBsYXllciBkaWQgbm90IHNldCBhIG5hbWUgeWV0KScsXG4gICAgICBtZXNzYWdlczogW3tcbiAgICAgICAgLy8gdGVzdFxuICAgICAgICBhdXRob3I6ICdtZScsXG4gICAgICAgIGNvbnRlbnQ6ICdhbnl0aGluZycsXG4gICAgICAgIGNzczogbnVsbCxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0ZXN0XG4gICAgICAgIGF1dGhvcjogJ290aGVyJyxcbiAgICAgICAgY29udGVudDogJ2FueXRoaW5nIDInLFxuICAgICAgICBjc3M6IG51bGwsXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFVUQ01pbGxpc2Vjb25kcygpICsgMSxcbiAgICAgIH1dLFxuICAgIH07XG5cbiAgICAvLyBwcm92aWRlIGNvbnRleHQgdG8gYmluZGluZ3NcbiAgICB0aGlzLmhhbmRsZU5ld01lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU5ld01lc3NhZ2UoKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxoMz5XZWxjb21lIHRvIHRoZSBjaGF0LiBZb3UncmUgY2hhdHRpbmcgd2l0aCA8TmFtZSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IC8+PC9oMz5cbiAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30vPlxuICAgICAgPE5ld01lc3NhZ2UgaGFuZGxlUmVzdWx0PXt0aGlzLmhhbmRsZU5ld01lc3NhZ2V9IC8+XG4gICAgICB7LyogTWFrZSBzdHlsZXMgYXZhaWxhYmxlIHRvIGNoaWxkcmVuICovfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4pO1xuICB9XG59Il19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;