import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

let Reverser = ({ message, onChange, reverse }) =>
  <div>
    <input type="text" value={message} onChange={onChange} />
    <button onClick={reverse}>Reverse Message</button>
  </div>

let onChange = ({ setMessage }) => event => {
  setMessage(event.target.value);
};

let reverse = ({ message, setMessage }) => () => {
  setMessage(message.split('').reverse().join(''));
};

let enhance = compose(
  withState('message', 'setMessage', ({ message }) => message),
  withHandlers({ onChange, reverse })
);

export default enhance(Reverser);
