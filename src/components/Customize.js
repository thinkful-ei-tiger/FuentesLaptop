import React, {Component} from 'react'
import slugify from 'slugify'

class Customize extends Component{
    render(){

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        const features = Object.keys(this.props.featureData).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.featureData[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.cartData[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
                </div>
            );
            });
    
            return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
            );
        });

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default Customize