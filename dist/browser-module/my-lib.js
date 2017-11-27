import React from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comp = function (_React$Component) {
  _inherits(Comp, _React$Component);

  function Comp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comp.__proto__ || Object.getPrototypeOf(Comp)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.props.initialState, _this.setState = _this.setState.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comp, [{
    key: 'render',
    value: function render() {
      var state = this.state,
          setState = this.setState;

      return this.props.render({ state: state, setState: setState });
    }
  }]);

  return Comp;
}(React.Component);

Comp.defaultProps = {
  initialState: {},
  render: function render() {
    return null;
  }
};

export default Comp;
