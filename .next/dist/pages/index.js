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
    value: function handleNewMessage(data) {
      console.log(data);
      // TODO
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        style: {
          height: '100%'
        },
        'data-jsx': 1986445826,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 1986445826,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Welcome to the chat. You are chatting with ', _react2.default.createElement(_Name2.default, { name: this.state.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(_Messages2.default, { messages: this.state.messages, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_NewMessage2.default, { handleResult: this.handleNewMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1986445826,
        css: '.messages-container{width:80%;list-style-type:none;padding-bottom:50px}.new-message{position:fixed;border-top:1px solid #000;bottom:0;height:50px;padding-top:15px;width:96%;clear:both}.new-message input{display:block;width:70%;height:20px;float:left}.new-message button{display:block;line-height:20px;width:20%;float:right}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDeUIsQUFHcUIsQUFNSyxBQVVDLEFBT0EsVUF0QkssSUFnQlQsQUFPTyxDQWpCTyxTQVdaLE9BaEJNLEFBdUJSLEtBTkMsS0FYSixBQWtCSyxNQU5kLEdBWFksQ0FOZCxFQXdCRSxTQWpCaUIsaUJBQ1AsVUFDQyxXQUNiIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21hbnVlbC9XT1JLL2dlbmVyYWwvREVNT1Mva29kaWZ5X2NoYXRhcHBsaWNhdGlvbl9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmFtZSBmcm9tICcuLi9jb21wb25lbnRzL05hbWUnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZXMnO1xuaW1wb3J0IE5ld01lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdNZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJyh0aGUgb3RoZXIgcGxheWVyIGRpZCBub3Qgc2V0IGEgbmFtZSB5ZXQpJyxcbiAgICAgIG1lc3NhZ2VzOiBbe1xuICAgICAgICAvLyB0ZXN0XG4gICAgICAgIGF1dGhvcjogJ21lJyxcbiAgICAgICAgY29udGVudDogJ2FueXRoaW5nJyxcbiAgICAgICAgY3NzOiBudWxsLFxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRlc3RcbiAgICAgICAgYXV0aG9yOiAnb3RoZXInLFxuICAgICAgICBjb250ZW50OiAnYW55dGhpbmcgMicsXG4gICAgICAgIGNzczogbnVsbCxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgKyAxLFxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIC8vIHByb3ZpZGUgY29udGV4dCB0byBiaW5kaW5nc1xuICAgIHRoaXMuaGFuZGxlTmV3TWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTmV3TWVzc2FnZShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMz5XZWxjb21lIHRvIHRoZSBjaGF0LiBZb3UgYXJlIGNoYXR0aW5nIHdpdGggPE5hbWUgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfSAvPjwvaDM+XG4gICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgIDxOZXdNZXNzYWdlIGhhbmRsZVJlc3VsdD17dGhpcy5oYW5kbGVOZXdNZXNzYWdlfSAvPlxuICAgICAgey8qIE1ha2Ugc3R5bGVzIGF2YWlsYWJsZSB0byBjaGlsZHJlbiAqL31cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tZXNzYWdlcy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldy1tZXNzYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgIC5uZXctbWVzc2FnZSBpbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmV3LW1lc3NhZ2UgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4pO1xuICB9XG59Il19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;