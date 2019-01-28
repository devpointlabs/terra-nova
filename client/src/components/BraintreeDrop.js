import React, { Component, } from 'react';
import axios from 'axios';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import renderSubmitButton from './BraintreeSubmitButton';
import { Dimmer, Loader, Segment, Button} from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';



class BraintreeDrop extends Component {
    state = { loaded: false, token: '', };

    componentDidMount() {
        axios.get('/api/braintree_token')
            .then(res => {
                const { data: token, } = res;
                this.setState({ token });
                this.loaded()
            })
    }

    loaded = () => {
        this.setState({ loaded: !this.state.loaded })
    }

    handlePaymentMethod = (payload) => {

    }

    render() {
        const { loaded, token, } = this.state;
        const { t } = this.props;
        if (loaded) {

            return (
                <Segment basic textAlign='center'>
                    <BraintreeDropin
                        braintree={braintree}
                        authorizationToken={token}
                        handlePaymentMethod={this.handlePaymentMethod}
                        submit={renderSubmitButton}
                    />
                </Segment>
            );
        } else {
            return (
                <Dimmer active>
                    <Loader>{t("Loading Luxury Premium Payment System...")}</Loader>
                </Dimmer>
            )
        }
    }
}

export default withNamespaces()(BraintreeDrop);