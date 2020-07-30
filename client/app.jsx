
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null
    };
  }

  nextHandler(form) {
    event.preventDefault();
    this.setState({form: form})
  }

  render() {
    return (
      <div>
       <div><h1>Checkout Page</h1></div>
         <div><button type="button" onClick={this.nextHandler.bind(this, 'f1')}>Checkout</button></div>
        {this.state.form === 'f1' ?
          <div><Form1 nextHandler={this.nextHandler.bind(this, 'f2')}/></div> : null}

        {this.state.form === 'f2' ?
          <div><Form2 nextHandler={this.nextHandler.bind(this, 'f3')}/></div> : null}

        {this.state.form === 'f3' ?
          <div><Form3 nextHandler={this.nextHandler.bind(this, 'conf')}/></div> : null}

        {this.state.form === 'conf' ?
          <div><Confirmation confirmHandler={this.nextHandler.bind(this, null)}/></div> : null
        }
      </div>
          )

  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.httpHandler = this.httpHandler.bind(this);
  }

  httpHandler() {
    axios.post('/form1', this.state)
    .catch((error) => {
      console.log(error);
    });
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
  return (
  <div class="form">
  <h2>Create Account</h2>
    <form onSubmit={() => {
      this.httpHandler.call(this);
      this.props.nextHandler();}}>
      <label for="name">Name:</label>
        <input onChange={this.changeHandler} id="name" type="text"></input><br></br>
      <label for="email">Email:</label>
        <input onChange={this.changeHandler} id="email" type="text"></input><br></br>
      <label for="password">Password:</label>
        <input onChange={this.changeHandler} id="password" type="text"></input><br></br>
      <br></br>
      <input type="submit" value="Next"></input>
    </form>
  </div>
  )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: null,
      line2: null,
      state: null,
      city: null,
      zip: null,
      phone: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.httpHandler = this.httpHandler.bind(this);
  }

  httpHandler() {
    axios.post('/form2', this.state)
    .catch((error) => {
      console.log(error);
    });
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
  return (
  <div class="form">
  <h2>Ship to:</h2>
    <form onSubmit={() => {
      this.httpHandler.call(this);
      this.props.nextHandler();}}>
      <label for="line1">Address line 1:</label>
        <input onChange={this.changeHandler} id="line1" type="text"></input><br></br>
      <label for="line2">Address line 2:</label>
        <input onChange={this.changeHandler} id="line2" type="text"></input><br></br>
      <label for="state">State:</label>
        <input onChange={this.changeHandler} id="state" type="text"></input><br></br>
      <label for="city">City:</label>
        <input onChange={this.changeHandler} id="city" type="text"></input><br></br>
      <label for="zip">Billing Zip Code:</label>
        <input onChange={this.changeHandler} id="zip" type="text"></input><br></br>
      <label for="phone">Phone Number:</label>
        <input onChange={this.changeHandler} id="phone" type="text"></input><br></br>
      <br></br>
      <input type="submit" value="Next"></input>
    </form>
  </div>
  )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc: null,
      exp: null,
      cvv: null,
      zip: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.httpHandler = this.httpHandler.bind(this);
  }

httpHandler() {
    axios.post('/form3', this.state)
    .catch((error) => {
      console.log(error)
  })
}

changeHandler(e) {
  e.preventDefault();
  this.setState({[e.target.id] : e.target.value});
}

  render() {
  return (
  <div class="form">
  <h2>Payment Information</h2>
    <form onSubmit={() => {
      this.httpHandler.call(this);
      this.props.nextHandler();}}>
      <label for="cc">Credit Card Number:</label>
        <input onChange={this.changeHandler} id="cc" type="text"></input><br></br>
      <label for="exp">Expiry Date:</label>
        <input onChange={this.changeHandler} id="exp" type="text"></input><br></br>
      <label for="cvv">CVV:</label>
        <input onChange={this.changeHandler} id="cvv" type="text"></input><br></br>
      <label for="zip">Billing Zip Code:</label>
        <input onChange={this.changeHandler} id="zip" type="text"></input><br></br>
      <br></br>
      <input type="submit" value="Complete Checkout"></input>
    </form>
  </div>
  )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      password: null,
      line1: null,
      line2: null,
      state: null,
      zip: null,
      phone: null,
      cc: null,
      exp: null,
      cvv: null,
      zip: null,
    };
  }

  httpHandler() {
    axios.get('/conf')
    .then((response) => {
      this.setState(response);
    })
  }

  componentDidMount() {
    axios.get('/conf')
    .then((response) => {
      this.setState(response.data);
    })
  }

  render() {
    return (
      <div class="form">
      <h3>Please confirm your information below:</h3>
      <div id="resData">
        <p>Name:{this.state.name}</p>
        <p>email:{this.state.email}</p>
        <p>password:{this.state.password}</p>
        <p>line1:{this.state.line1}</p>
        <p>line2:{this.state.line2}</p>
        <p>state:{this.state.state}</p>
        <p>zip:{this.state.zip}</p>
        <p>phone:{this.state.phone}</p>
        <p>cc:{this.state.cc}</p>
        <p>exp:{this.state.exp}</p>
        <p>cvv:{this.state.cvv}</p>
        <p>zip:{this.state.zip}</p>
      </div>
      <button onClick={() => {
        this.httpHandler.call(this);
        this.props.confirmHandler()}} type="button" value="Confirm Payment">Confirm Order</button>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
