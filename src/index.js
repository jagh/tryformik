import React from 'react';
import ReactDOM from 'react-dom';


class MiniFormik extends React.Component {
  state = {
    values: this.props.initialValues || {},
    touched: {},
    errors: {}
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    event.persist();
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  }

  handleBlur = event => {
    const target = event.target;
    const name = target.name;
    event.persist();
    this.setState(prevState => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    // validate
    this.props.onSubmit(this.state.values)
  }

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit,
    });
  }
}


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <MiniFormik
        initialValues={{
          isGoing: true,
          numberOfGuests: 2,
        }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
        >
        {(props) => {
          const { values, errors, touched, handleBlur, handleSubmit, handleChange } = props
          return (
            <form onSubmit={handleSubmit}>
              <label>
                Is going:
                <input
                  name="isGoing"
                  type="checkbox"
                  className="checkbox"
                  checked={values.isGoing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <br />
              <label>
                Number of guests:
                <input
                  name="numberOfGuests"
                  type="number"
                  value={values.numberOfGuests}
                  onChange={handleChange}
                />
              </label>
              <pre>{JSON.stringify(props, null, 2)}</pre>
          </form>
        );
      }}
      </MiniFormik>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
