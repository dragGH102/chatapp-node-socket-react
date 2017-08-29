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
        'data-jsx': 3754458827,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        'data-jsx': 3754458827,
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
        styleId: 3754458827,
        css: '.messages-container{width:80%;list-style-type:none;padding-bottom:50px}.new-message{position:fixed;border-top:1px solid #000;bottom:0;height:50px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDeUIsQUFHcUIsQUFNSyxVQUxNLEtBTUssZ0JBTE4sVUFNWCxTQUNHLENBTmQsV0FPQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYW51ZWwvV09SSy9nZW5lcmFsL0RFTU9TL2tvZGlmeV9jaGF0YXBwbGljYXRpb25fbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9OYW1lJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2VzJztcbmltcG9ydCBOZXdNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3TWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcodGhlIG90aGVyIHBsYXllciBkaWQgbm90IHNldCBhIG5hbWUgeWV0KScsXG4gICAgICBtZXNzYWdlczogW3tcbiAgICAgICAgLy8gdGVzdFxuICAgICAgICBhdXRob3I6ICdtZScsXG4gICAgICAgIGNvbnRlbnQ6ICdhbnl0aGluZycsXG4gICAgICAgIGNzczogbnVsbCxcbiAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0ZXN0XG4gICAgICAgIGF1dGhvcjogJ290aGVyJyxcbiAgICAgICAgY29udGVudDogJ2FueXRoaW5nIDInLFxuICAgICAgICBjc3M6IG51bGwsXG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFVUQ01pbGxpc2Vjb25kcygpICsgMSxcbiAgICAgIH1dLFxuICAgIH07XG5cbiAgICAvLyBwcm92aWRlIGNvbnRleHQgdG8gYmluZGluZ3NcbiAgICB0aGlzLmhhbmRsZU5ld01lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU5ld01lc3NhZ2UoKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoMz5XZWxjb21lIHRvIHRoZSBjaGF0LiBZb3UgYXJlIGNoYXR0aW5nIHdpdGggPE5hbWUgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfSAvPjwvaDM+XG4gICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgIDxOZXdNZXNzYWdlIGhhbmRsZVJlc3VsdD17dGhpcy5oYW5kbGVOZXdNZXNzYWdlfSAvPlxuICAgICAgey8qIE1ha2Ugc3R5bGVzIGF2YWlsYWJsZSB0byBjaGlsZHJlbiAqL31cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tZXNzYWdlcy1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldy1tZXNzYWdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2Pik7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return ChatApp;
}(_react2.default.Component);

exports.default = ChatApp;