import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Grid textAlign="center" verticalAlign="middle">
                    <Grid.Column style={{ maxwidth: 450 }}>
                        <Header as="h2" icon color="orange" textAlign="center">
                            <Icon name="puzzle piece" color="orange" />
                            Register for DevChat
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" />
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Register;