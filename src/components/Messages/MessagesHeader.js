import React from 'react';
import { Header, Input, Segment, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                {/* Channel Title */}
                <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
                    <spna>
                    Channel
                    <Icon name={"star outline"} color="black" />
                    </spna>
                    <Header.Subheader>2 Users</Header.Subheader>
                </Header>

                {/* Channel Search Input */}
                <Header floadted="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Messages"
                    />
                </Header>
            </Segment>
        );
    }
}

export default MessagesHeader;