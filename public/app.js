class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null
    };
  }

  nextHandler(form) {
    event.preventDefault();
    this.setState({
      form: form
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Checkout Page")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.nextHandler.bind(this, 'f1')
    }, "Checkout")), this.state.form === 'f1' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form1, {
      nextHandler: this.nextHandler.bind(this, 'f2')
    })) : null, this.state.form === 'f2' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form2, {
      nextHandler: this.nextHandler.bind(this, 'f3')
    })) : null, this.state.form === 'f3' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form3, {
      nextHandler: this.nextHandler.bind(this, 'conf')
    })) : null, this.state.form === 'conf' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Confirmation, {
      confirmHandler: this.nextHandler.bind(this, null)
    })) : null);
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
    this.changeHandler = this.changeHandler.bind(this); // this.httpHandler = this.httpHandler.bind(this);
  }

  httpHandler() {
    axios.post('/form1', this.state).catch(error => {
      console.log(error);
    });
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "form"
    }, /*#__PURE__*/React.createElement("h2", null, "Create Account"), /*#__PURE__*/React.createElement("form", {
      onSubmit: () => {
        this.httpHandler.call(this);
        this.props.nextHandler();
      }
    }, /*#__PURE__*/React.createElement("label", {
      for: "name"
    }, "Name:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "name",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "email"
    }, "Email:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "email",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "password"
    }, "Password:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "password",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
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
    this.changeHandler = this.changeHandler.bind(this); // this.httpHandler = this.httpHandler.bind(this);
  }

  httpHandler() {
    axios.post('/form2', this.state).catch(error => {
      console.log(error);
    });
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "form"
    }, /*#__PURE__*/React.createElement("h2", null, "Ship to:"), /*#__PURE__*/React.createElement("form", {
      onSubmit: () => {
        this.httpHandler.call(this);
        this.props.nextHandler();
      }
    }, /*#__PURE__*/React.createElement("label", {
      for: "line1"
    }, "Address line 1:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "line1",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "line2"
    }, "Address line 2:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "line2",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "state"
    }, "State:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "state",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "city"
    }, "City:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "city",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "zip"
    }, "Billing Zip Code:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "zip",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "phone"
    }, "Phone Number:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "phone",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Next"
    })));
  }

}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc: null,
      exp: null,
      cvv: null,
      zip: null
    };
    this.changeHandler = this.changeHandler.bind(this); // this.httpHandler = this.httpHandler.bind(this);
  }

  httpHandler() {
    axios.post('/form3', this.state).catch(error => {
      console.log(error);
    });
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "form"
    }, /*#__PURE__*/React.createElement("h2", null, "Payment Information"), /*#__PURE__*/React.createElement("form", {
      onSubmit: () => {
        this.httpHandler.call(this);
        this.props.nextHandler();
      }
    }, /*#__PURE__*/React.createElement("label", {
      for: "cc"
    }, "Credit Card Number:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "cc",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "exp"
    }, "Expiry Date:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "exp",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "cvv"
    }, "CVV:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "cvv",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "zip"
    }, "Billing Zip Code:"), /*#__PURE__*/React.createElement("input", {
      onChange: this.changeHandler,
      id: "zip",
      type: "text"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Complete Checkout"
    })));
  }

}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
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
      zip: null
    };
  }

  httpHandler() {
    axios.get('/conf').then(response => {
      this.setState(response);
    });
  }

  componentDidMount() {
    axios.get('/conf').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "form"
    }, /*#__PURE__*/React.createElement("h3", null, "Please confirm your information below:"), /*#__PURE__*/React.createElement("div", {
      id: "resData"
    }, /*#__PURE__*/React.createElement("p", null, "Name:", this.state.name), /*#__PURE__*/React.createElement("p", null, "email:", this.state.email), /*#__PURE__*/React.createElement("p", null, "password:", this.state.password), /*#__PURE__*/React.createElement("p", null, "line1:", this.state.line1), /*#__PURE__*/React.createElement("p", null, "line2:", this.state.line2), /*#__PURE__*/React.createElement("p", null, "state:", this.state.state), /*#__PURE__*/React.createElement("p", null, "zip:", this.state.zip), /*#__PURE__*/React.createElement("p", null, "phone:", this.state.phone), /*#__PURE__*/React.createElement("p", null, "cc:", this.state.cc), /*#__PURE__*/React.createElement("p", null, "exp:", this.state.exp), /*#__PURE__*/React.createElement("p", null, "cvv:", this.state.cvv), /*#__PURE__*/React.createElement("p", null, "zip:", this.state.zip)), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        this.httpHandler.call(this);
        this.props.confirmHandler();
      },
      type: "button",
      value: "Confirm Payment"
    }, "Confirm Order"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsIm5leHRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCIsIkZvcm0xIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGFuZ2VIYW5kbGVyIiwiaHR0cEhhbmRsZXIiLCJheGlvcyIsInBvc3QiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiY2FsbCIsIkZvcm0yIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsIkZvcm0zIiwiY2MiLCJleHAiLCJjdnYiLCJDb25maXJtYXRpb24iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb21wb25lbnREaWRNb3VudCIsImRhdGEiLCJjb25maXJtSGFuZGxlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUU7QUFESyxLQUFiO0FBR0Q7O0FBRURDLEVBQUFBLFdBQVcsQ0FBQ0QsSUFBRCxFQUFPO0FBQ2hCRSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFBQ0osTUFBQUEsSUFBSSxFQUFFQTtBQUFQLEtBQWQ7QUFDRDs7QUFFREssRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0MsOENBQUssZ0RBQUwsQ0FERCxlQUVHLDhDQUFLO0FBQVEsTUFBQSxJQUFJLEVBQUMsUUFB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QUFMLENBQVdTLElBQXBCLENBREYsZUFFRSx5Q0FBVSxLQUFLVCxLQUFMLENBQVdVLEtBQXJCLENBRkYsZUFHRSw0Q0FBYSxLQUFLVixLQUFMLENBQVdXLFFBQXhCLENBSEYsZUFJRSx5Q0FBVSxLQUFLWCxLQUFMLENBQVcwQixLQUFyQixDQUpGLGVBS0UseUNBQVUsS0FBSzFCLEtBQUwsQ0FBVzJCLEtBQXJCLENBTEYsZUFNRSx5Q0FBVSxLQUFLM0IsS0FBTCxDQUFXQSxLQUFyQixDQU5GLGVBT0UsdUNBQVEsS0FBS0EsS0FBTCxDQUFXNkIsR0FBbkIsQ0FQRixlQVFFLHlDQUFVLEtBQUs3QixLQUFMLENBQVc4QixLQUFyQixDQVJGLGVBU0Usc0NBQU8sS0FBSzlCLEtBQUwsQ0FBV2dDLEVBQWxCLENBVEYsZUFVRSx1Q0FBUSxLQUFLaEMsS0FBTCxDQUFXaUMsR0FBbkIsQ0FWRixlQVdFLHVDQUFRLEtBQUtqQyxLQUFMLENBQVdrQyxHQUFuQixDQVhGLGVBWUUsdUNBQVEsS0FBS2xDLEtBQUwsQ0FBVzZCLEdBQW5CLENBWkYsQ0FGQSxlQWdCQTtBQUFRLE1BQUEsT0FBTyxFQUFFLE1BQU07QUFDckIsYUFBS2hCLFdBQUwsQ0FBaUJXLElBQWpCLENBQXNCLElBQXRCO0FBQ0EsYUFBS3pCLEtBQUwsQ0FBVzBDLGNBQVg7QUFBNEIsT0FGOUI7QUFFZ0MsTUFBQSxJQUFJLEVBQUMsUUFGckM7QUFFOEMsTUFBQSxLQUFLLEVBQUM7QUFGcEQsdUJBaEJBLENBREY7QUF1QkQ7O0FBekR3Qzs7QUE0RDNDQyxRQUFRLENBQUNwQyxNQUFULGVBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJxQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIG5leHRIYW5kbGVyKGZvcm0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm06IGZvcm19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgIDxkaXY+PGgxPkNoZWNrb3V0IFBhZ2U8L2gxPjwvZGl2PlxuICAgICAgICAgPGRpdj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm5leHRIYW5kbGVyLmJpbmQodGhpcywgJ2YxJyl9PkNoZWNrb3V0PC9idXR0b24+PC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm0gPT09ICdmMScgP1xuICAgICAgICAgIDxkaXY+PEZvcm0xIG5leHRIYW5kbGVyPXt0aGlzLm5leHRIYW5kbGVyLmJpbmQodGhpcywgJ2YyJyl9Lz48L2Rpdj4gOiBudWxsfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm0gPT09ICdmMicgP1xuICAgICAgICAgIDxkaXY+PEZvcm0yIG5leHRIYW5kbGVyPXt0aGlzLm5leHRIYW5kbGVyLmJpbmQodGhpcywgJ2YzJyl9Lz48L2Rpdj4gOiBudWxsfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm0gPT09ICdmMycgP1xuICAgICAgICAgIDxkaXY+PEZvcm0zIG5leHRIYW5kbGVyPXt0aGlzLm5leHRIYW5kbGVyLmJpbmQodGhpcywgJ2NvbmYnKX0vPjwvZGl2PiA6IG51bGx9XG5cbiAgICAgICAge3RoaXMuc3RhdGUuZm9ybSA9PT0gJ2NvbmYnID9cbiAgICAgICAgICA8ZGl2PjxDb25maXJtYXRpb24gY29uZmlybUhhbmRsZXI9e3RoaXMubmV4dEhhbmRsZXIuYmluZCh0aGlzLCBudWxsKX0vPjwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuXG4gIH1cbn1cblxuY2xhc3MgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogbnVsbCxcbiAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgcGFzc3dvcmQ6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaHR0cEhhbmRsZXIgPSB0aGlzLmh0dHBIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBodHRwSGFuZGxlcigpIHtcbiAgICBheGlvcy5wb3N0KCcvZm9ybTEnLCB0aGlzLnN0YXRlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICA8aDI+Q3JlYXRlIEFjY291bnQ8L2gyPlxuICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICB0aGlzLmh0dHBIYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnByb3BzLm5leHRIYW5kbGVyKCk7fX0+XG4gICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIj48L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZTE6IG51bGwsXG4gICAgICBsaW5lMjogbnVsbCxcbiAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgY2l0eTogbnVsbCxcbiAgICAgIHppcDogbnVsbCxcbiAgICAgIHBob25lOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmh0dHBIYW5kbGVyID0gdGhpcy5odHRwSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaHR0cEhhbmRsZXIoKSB7XG4gICAgYXhpb3MucG9zdCgnL2Zvcm0yJywgdGhpcy5zdGF0ZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgPGgyPlNoaXAgdG86PC9oMj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17KCkgPT4ge1xuICAgICAgdGhpcy5odHRwSGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5wcm9wcy5uZXh0SGFuZGxlcigpO319PlxuICAgICAgPGxhYmVsIGZvcj1cImxpbmUxXCI+QWRkcmVzcyBsaW5lIDE6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwibGluZTFcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwibGluZTJcIj5BZGRyZXNzIGxpbmUgMjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gaWQ9XCJsaW5lMlwiIHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbCBmb3I9XCJzdGF0ZVwiPlN0YXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBpZD1cInN0YXRlXCIgdHlwZT1cInRleHRcIj48L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiemlwXCI+QmlsbGluZyBaaXAgQ29kZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gaWQ9XCJ6aXBcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwicGhvbmVcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCI+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2M6IG51bGwsXG4gICAgICBleHA6IG51bGwsXG4gICAgICBjdnY6IG51bGwsXG4gICAgICB6aXA6IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmh0dHBIYW5kbGVyID0gdGhpcy5odHRwSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbmh0dHBIYW5kbGVyKCkge1xuICAgIGF4aW9zLnBvc3QoJy9mb3JtMycsIHRoaXMuc3RhdGUpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH0pXG59XG5cbmNoYW5nZUhhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMuc2V0U3RhdGUoe1tlLnRhcmdldC5pZF0gOiBlLnRhcmdldC52YWx1ZX0pO1xufVxuXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgPGgyPlBheW1lbnQgSW5mb3JtYXRpb248L2gyPlxuICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiB7XG4gICAgICB0aGlzLmh0dHBIYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnByb3BzLm5leHRIYW5kbGVyKCk7fX0+XG4gICAgICA8bGFiZWwgZm9yPVwiY2NcIj5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwiY2NcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiZXhwXCI+RXhwaXJ5IERhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGlkPVwiZXhwXCIgdHlwZT1cInRleHRcIj48L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cImN2dlwiPkNWVjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gaWQ9XCJjdnZcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiemlwXCI+QmlsbGluZyBaaXAgQ29kZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gaWQ9XCJ6aXBcIiB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDb21wbGV0ZSBDaGVja291dFwiPjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgKVxuICB9XG59XG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICBlbWFpbDogbnVsbCxcbiAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgbGluZTE6IG51bGwsXG4gICAgICBsaW5lMjogbnVsbCxcbiAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgemlwOiBudWxsLFxuICAgICAgcGhvbmU6IG51bGwsXG4gICAgICBjYzogbnVsbCxcbiAgICAgIGV4cDogbnVsbCxcbiAgICAgIGN2djogbnVsbCxcbiAgICAgIHppcDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgaHR0cEhhbmRsZXIoKSB7XG4gICAgYXhpb3MuZ2V0KCcvY29uZicpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHJlc3BvbnNlKTtcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KCcvY29uZicpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtXCI+XG4gICAgICA8aDM+UGxlYXNlIGNvbmZpcm0geW91ciBpbmZvcm1hdGlvbiBiZWxvdzo8L2gzPlxuICAgICAgPGRpdiBpZD1cInJlc0RhdGFcIj5cbiAgICAgICAgPHA+TmFtZTp7dGhpcy5zdGF0ZS5uYW1lfTwvcD5cbiAgICAgICAgPHA+ZW1haWw6e3RoaXMuc3RhdGUuZW1haWx9PC9wPlxuICAgICAgICA8cD5wYXNzd29yZDp7dGhpcy5zdGF0ZS5wYXNzd29yZH08L3A+XG4gICAgICAgIDxwPmxpbmUxOnt0aGlzLnN0YXRlLmxpbmUxfTwvcD5cbiAgICAgICAgPHA+bGluZTI6e3RoaXMuc3RhdGUubGluZTJ9PC9wPlxuICAgICAgICA8cD5zdGF0ZTp7dGhpcy5zdGF0ZS5zdGF0ZX08L3A+XG4gICAgICAgIDxwPnppcDp7dGhpcy5zdGF0ZS56aXB9PC9wPlxuICAgICAgICA8cD5waG9uZTp7dGhpcy5zdGF0ZS5waG9uZX08L3A+XG4gICAgICAgIDxwPmNjOnt0aGlzLnN0YXRlLmNjfTwvcD5cbiAgICAgICAgPHA+ZXhwOnt0aGlzLnN0YXRlLmV4cH08L3A+XG4gICAgICAgIDxwPmN2djp7dGhpcy5zdGF0ZS5jdnZ9PC9wPlxuICAgICAgICA8cD56aXA6e3RoaXMuc3RhdGUuemlwfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cEhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtSGFuZGxlcigpfX0gdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ29uZmlybSBQYXltZW50XCI+Q29uZmlybSBPcmRlcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=