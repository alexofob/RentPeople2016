import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

const styles = {
  increaseSpace: {
    marginTop: 10,
  },
};

const ResetPwd = ({ onSubmitResetPwd }) => (
  <Form onValidSubmit={(data) => onSubmitResetPwd(data)}>

    <FormsyText
      name="email"
      required
      validations="isEmail"
      validationError="This is not a valid email"
      floatingLabelText="Email Address"
      fullWidth
    />

    <div style={styles.increaseSpace}>
      <span>
        <RaisedButton
          type="submit"
          secondary
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
