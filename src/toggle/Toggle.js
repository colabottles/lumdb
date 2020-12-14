/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility
      && <Message class="message">You will be seeing this if redux action is toggled</Message>}
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

const Message = styled.div`
  color: white;
  padding: 2rem;
`;
