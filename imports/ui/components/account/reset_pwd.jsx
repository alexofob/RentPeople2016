import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/lib/raised-button';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

const ResetPwd = ({ onSubmitResetPwd }) => (
  <Form onValidSubmit={(data) => onSubmitResetPwd(data)}>

    <FormsyText
      name="email"
      required
      validations="isEmail"
      validationError="This is not a valid email"
      floatingLabelText="Email Address"
    />

    <div className="login-item">
      <span>
        <RaisedButton
          type="submit"
          primary
          label="SEND RESET LINK"
        />
      </span>

    </div>
  </Form>
);

ResetPwd.propTypes = {
  onSubmitResetPwd: PropTypes.func.isRequired,
};

export default ResetPwd;
