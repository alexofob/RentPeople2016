import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

const styles = {
  card: {
    margin: 50,
    width: 300,
  },
};

const ResetPwdFinal = ({ onResetPwd }) => (
  <Form onValidSubmit={(data) => onResetPwd(data)}>
    <Card style={styles.card}>
      <CardHeader
        title="Reset Password"
      />
      <CardText>
        <FormsyText
          name="password"
          required
          validations="minLength:4"
          validationError="Password looks a bit short, try again"
          type="password"
          floatingLabelText="Password"
        />
        <FormsyText
          name="confirmPassword"
          required
          validations="equalsField:password"
          validationError="Passwords do not match"
          type="password"
          floatingLabelText="Confirm Password"
        />
      </CardText>
      <CardActions>
        <FlatButton
          type="submit"
          primary
          label="RESET PASSWORD"
        />
      </CardActions>
    </Card>
  </Form>
);

ResetPwdFinal.propTypes = {
  onResetPwd: PropTypes.func.isRequired,
};

export default ResetPwdFinal;
