import React, {Component} from 'react'

class Cart extends Component {

    render(){

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        const total = Object.keys(this.props.cartData).reduce(
            (acc, curr) => acc + this.props.cartData[curr].cost,
            0
        );

        const summary = Object.keys(this.props.cartData).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.cartData[feature];
        
            return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
            );
        });


        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
            </div>
        </section>
        )
    }
}

export default Cart





