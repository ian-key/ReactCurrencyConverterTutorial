var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyInput = function (_React$Component) {
  _inherits(CurrencyInput, _React$Component);

  function CurrencyInput() {
    _classCallCheck(this, CurrencyInput);

    return _possibleConstructorReturn(this, (CurrencyInput.__proto__ || Object.getPrototypeOf(CurrencyInput)).apply(this, arguments));
  }

  _createClass(CurrencyInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          handleChange = _props.handleChange;


      return React.createElement("input", { value: value, onChange: handleChange, type: "number" });
    }
  }]);

  return CurrencyInput;
}(React.Component);

var CurrencyConverter = function (_React$Component2) {
  _inherits(CurrencyConverter, _React$Component2);

  function CurrencyConverter(props) {
    _classCallCheck(this, CurrencyConverter);

    var _this2 = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

    _this2.state = {
      rate: 0.86,
      euro: 1,
      gbp: 1 * 0.86
    };

    _this2.handleEuroChange = _this2.handleEuroChange.bind(_this2);
    _this2.handleGbpChange = _this2.handleGbpChange.bind(_this2);
    return _this2;
  }

  _createClass(CurrencyConverter, [{
    key: "toeuro",
    value: function toeuro(amount, rate) {
      return amount * (1 / rate);
    }
  }, {
    key: "togbp",
    value: function togbp(amount, rate) {
      return amount * rate;
    }
  }, {
    key: "convert",
    value: function convert(amount, rate, equation) {
      var input = parseFloat(amount);
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(3);
    }
  }, {
    key: "handleEuroChange",
    value: function handleEuroChange(event) {
      var gbp = this.convert(event.target.value, this.state.rate, this.togbp);
      this.setState({
        euro: event.target.value,
        gbp: gbp
      });
    }
  }, {
    key: "handleGbpChange",
    value: function handleGbpChange(event) {
      var euro = this.convert(event.target.value, this.state.rate, this.toeuro);
      this.setState({
        gbp: event.target.value,
        euro: euro
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          rate = _state.rate,
          euro = _state.euro,
          gbp = _state.gbp;


      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "text-center p-3 mb-2" },
          React.createElement(
            "h2",
            { className: "mb-2" },
            "Currency Converter App"
          ),
          React.createElement(
            "h4",
            null,
            "Euro 1 : ",
            rate,
            " GBP"
          )
        ),
        React.createElement(
          "div",
          { className: "row text-center" },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "span",
              { className: "mr-1" },
              "Euro"
            ),
            React.createElement(CurrencyInput, { value: euro, handleChange: this.handleEuroChange }),
            React.createElement(
              "span",
              { className: "mx-3" },
              "="
            ),
            React.createElement(CurrencyInput, { value: gbp, handleChange: this.handleGbpChange }),
            React.createElement(
              "span",
              { className: "ml-1" },
              "GBP"
            )
          )
        )
      );
    }
  }]);

  return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root'));