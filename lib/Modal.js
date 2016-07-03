'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this2.props = props;

        _this2.openModal = _this2.openModal.bind(_this2);
        _this2.closeModal = _this2.closeModal.bind(_this2);

        _this2.state = {
            isopen: props['data-isopen']
        };

        return _this2;
    }

    _createClass(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {}
    }, {
        key: 'closeModal',
        value: function closeModal() {

            this.setState({
                isopen: false
            });

            document.body.classList.remove('modal-open');

            document.onkeydown = function () {};
        }
    }, {
        key: 'openModal',
        value: function openModal() {

            this.setState({
                isopen: true
            });

            document.body.classList.add('modal-open');

            var _this = this;

            document.onkeydown = function (evt) {

                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = evt.key == "Escape";
                } else {
                    isEscape = evt.keyCode == 27;
                }
                if (isEscape && _this.state.isopen) {
                    _this.closeModal();
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {

            var modalStyle = this.state.isopen ? { display: 'block', paddingLeft: '0px' } : {};

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    _extends({}, this.props, { className: (0, _classnames2.default)('modal fade', this.props.className, { 'in': this.state.isopen }), style: modalStyle }),
                    _react2.default.createElement('div', { className: 'modal-backdrop fade in', onClick: this.closeModal }),
                    this.props.children
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

Modal.Body = _ModalBody2.default;
Modal.Dialog = _ModalDialog2.default;
Modal.Footer = _ModalFooter2.default;
Modal.Header = _ModalHeader2.default;
Modal.Title = _ModalTitle2.default;

exports.default = Modal;