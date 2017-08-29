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
        'data-jsx': 1986445826,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 1986445826,
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
        styleId: 1986445826,
        css: '.messages-container{width:80%;list-style-type:none;padding-bottom:50px}.new-message{position:fixed;border-top:1px solid #000;bottom:0;height:50px;padding-top:15px;width:96%;clear:both}.new-message input{display:block;width:70%;height:20px;float:left}.new-message button{display:block;line-height:20px;width:20%;float:right}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDeUIsQUFHcUIsQUFNSyxBQVVDLEFBT0EsVUF0QkssSUFnQlQsQUFPTyxDQWpCTyxTQVdaLE9BaEJNLEFBdUJSLEtBTkMsS0FYSixBQWtCSyxNQU5kLEdBWFksQ0FOZCxFQXdCRSxTQWpCaUIsaUJBQ1AsVUFDQyxXQUNiIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21hbnVlbC9XT1JLL2dlbmVyYWwvREVNT1Mva29kaWZ5X2NoYXRhcHBsaWNhdGlvbl9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmFtZSBmcm9tICcuLi9jb21wb25lbnRzL05hbWUnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZXMnO1xuaW1wb3J0IE5ld01lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdNZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJyh0aGUgb3RoZXIgcGxheWVyIGRpZCBub3Qgc2V0IGEgbmFtZSB5ZXQpJyxcbiAgICAgIG1lc3NhZ2VzOiBbe1xuICAgICAgICAvLyB0ZXN0XG4gICAgICAgIGF1dGhvcjogJ21lJyxcbiAgICAgICAgY29udGVudDogJ2FueXRoaW5nJyxcbiAgICAgICAgY3NzOiBudWxsLFxuICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRlc3RcbiAgICAgICAgYXV0aG9yOiAnb3RoZXInLFxuICAgICAgICBjb250ZW50OiAnYW55dGhpbmcgMicsXG4gICAgICAgIGNzczogbnVsbCxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgKyAxLFxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIC8vIHByb3ZpZGUgY29udGV4dCB0byBiaW5kaW5nc1xuICAgIHRoaXMuaGFuZGxlTmV3TWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTmV3TWVzc2FnZSgpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgzPldlbGNvbWUgdG8gdGhlIGNoYXQuIFlvdSBhcmUgY2hhdHRpbmcgd2l0aCA8TmFtZSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IC8+PC9oMz5cbiAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30vPlxuICAgICAgPE5ld01lc3NhZ2UgaGFuZGxlUmVzdWx0PXt0aGlzLmhhbmRsZU5ld01lc3NhZ2V9IC8+XG4gICAgICB7LyogTWFrZSBzdHlsZXMgYXZhaWxhYmxlIHRvIGNoaWxkcmVuICovfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV3LW1lc3NhZ2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIH1cblxuICAgICAgICAgLm5ldy1tZXNzYWdlIGlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uZXctbWVzc2FnZSBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2Pik7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;