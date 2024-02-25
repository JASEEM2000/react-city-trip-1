import React, { Component } from 'react';
import './trip.scss'; 

export default class Trip extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }

    render() {
        const { id, city, img, name, info } = this.props.trip;
        const { removeTrip } = this.props;

        return (
            <article className='trip'>
                <div className='img-container'>
                    <img 
                        src={img}
                        alt=""
                    />
                    <span className="close-btn" onClick={() => removeTrip(id)}> {/* Call removeTrip with id */}
                        {/* <i className="fas fa-window-close" /> */}
                    </span>
                </div>
                <div className='trip-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info {" "}
                        <span onClick={this.handleInfo}>
                            <i className='fas fa-caret-square-down'/></span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
}
