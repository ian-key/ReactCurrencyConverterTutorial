class CurrencyInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return <input value={value} onChange={handleChange} type="number" />;
  }
}

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.86,
      euro: 1,
      gbp: 1 * 0.86,
    };

    this.handleEuroChange = this.handleEuroChange.bind(this);
    this.handleGbpChange = this.handleGbpChange.bind(this);
  }

  toeuro(amount, rate) {
    return amount * (1 / rate);
  }

  togbp(amount, rate) {
    return amount * rate;
  }

convert(amount, rate, equation) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return '';
  }
  return equation(input, rate).toFixed(3);
}


handleEuroChange(event) {
  const gbp = this.convert(event.target.value, this.state.rate, this.togbp);
  this.setState({
    euro: event.target.value,
    gbp
  });
}

handleGbpChange(event) {
  const euro = this.convert(event.target.value, this.state.rate, this.toeuro);
  this.setState({
    gbp: event.target.value,
    euro
  });
}


render() {
  const { rate, euro, gbp } = this.state;

  return (
    <div className="container">
        <div className="text-center p-3 mb-2">
          <h2 className="mb-2">Currency Converter App</h2>
          <h4>Euro 1 : {rate} GBP</h4>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <span className="mr-1">Euro</span>
            <CurrencyInput value={euro} handleChange={this.handleEuroChange} />
            <span className="mx-3">=</span>
            <CurrencyInput value={gbp} handleChange={this.handleGbpChange} />
            <span className="ml-1">GBP</span>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CurrencyConverter />,
  document.getElementById('root')
);