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

var _NewMessage = require('../components/NewMessage');

var _NewMessage2 = _interopRequireDefault(_NewMessage);

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
        style: {
          height: '100%'
        },
        'data-jsx': 731786087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 731786087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Welcome to the chat. You are chatting with ', _react2.default.createElement(_Name2.default, { name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_Messages2.default, { messages: this.state.messages, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_NewMessage2.default, { handleResult: this.handleNewMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 731786087,
        css: '.messages-container{width:80%;list-style-type:none;padding-bottom:50px}.new-message{position:fixed;border-top:1px solid #000;bottom:0;height:50px;width:100%;clear:both}.new-message input{display:block;width:70%;height:20px;float:left}.new-message button{display:block;height:20px;width:20%;float:right;margin-right:5%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDeUIsQUFHcUIsQUFNSyxBQVNDLEFBT0EsVUFyQkssSUFlVCxBQU9FLENBaEJZLFNBVVosRUFPRixLQXRCUSxLQWdCUCxBQU9DLEtBakJMLE1BV1QsQ0FPa0IsRUFqQk4sQ0FOZCxXQU9hLEVBaUJYLFNBaEJXLFdBQ2IiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFudWVsL1dPUksvZ2VuZXJhbC9ERU1PUy9rb2RpZnlfY2hhdGFwcGxpY2F0aW9uX25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZSc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlcyc7XG5pbXBvcnQgTmV3TWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL05ld01lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnKHRoZSBvdGhlciBwbGF5ZXIgZGlkIG5vdCBzZXQgYSBuYW1lIHlldCknLFxuICAgICAgbWVzc2FnZXM6IFt7XG4gICAgICAgIC8vIHRlc3RcbiAgICAgICAgYXV0aG9yOiAnbWUnLFxuICAgICAgICBjb250ZW50OiAnYW55dGhpbmcnLFxuICAgICAgICBjc3M6IG51bGwsXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gdGVzdFxuICAgICAgICBhdXRob3I6ICdvdGhlcicsXG4gICAgICAgIGNvbnRlbnQ6ICdhbnl0aGluZyAyJyxcbiAgICAgICAgY3NzOiBudWxsLFxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRVVENNaWxsaXNlY29uZHMoKSArIDEsXG4gICAgICB9XSxcbiAgICB9O1xuXG4gICAgLy8gcHJvdmlkZSBjb250ZXh0IHRvIGJpbmRpbmdzXG4gICAgdGhpcy5oYW5kbGVOZXdNZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVOZXdNZXNzYWdlKCkge1xuICAgIC8vIFRPRE9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDM+V2VsY29tZSB0byB0aGUgY2hhdC4gWW91IGFyZSBjaGF0dGluZyB3aXRoIDxOYW1lIG5hbWU9e3RoaXMuc3RhdGUubmFtZX0gLz48L2gzPlxuICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfS8+XG4gICAgICA8TmV3TWVzc2FnZSBoYW5kbGVSZXN1bHQ9e3RoaXMuaGFuZGxlTmV3TWVzc2FnZX0gLz5cbiAgICAgIHsvKiBNYWtlIHN0eWxlcyBhdmFpbGFibGUgdG8gY2hpbGRyZW4gKi99XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAubWVzc2FnZXMtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXctbWVzc2FnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIH1cblxuICAgICAgICAgLm5ldy1tZXNzYWdlIGlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uZXctbWVzc2FnZSBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+KTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;