import React, { Component, } from 'react';
import axios from 'axios';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
// import BraintreeSubmitButton from './BraintreeSubmitButton';
import { Dimmer, Loader, Segment, } from 'semantic-ui-react';

class BraintreeDrop extends Component {
    state = { loaded: false, token: '', };

    componentDidMount() {
        axios.get('/api/braintree_token')
        .then( res => {
            const { data: token, } = res;
            this.setState({ token, loaded: true, });
        })
    }

    handlePaymentMethod = (payload) => {

    }

    render () {
        const { loaded, token, } = this.state;
        const { t } = this.props;

        if(loaded)
        return (
            <Segment basic textAlign='center'>
                <BraintreeDropin
                braintree={braintree}
                authorizationToken={token}
                handlePaymentMethod={this.handlePaymentMethod}
                // renderSubmitButton={BraintreeSubmitButton}
                />
            </Segment>
        );
        else
        return(
            <Dimmer active>
                <Loader>{t("Loading Luxury Premium Payment System...")}</Loader>
            </Dimmer>
        )
    }
}

export default BraintreeDrop;