import React, { Component } from 'react'
import { Router } from 'next/router'

class CardCom extends Component {

    render() {
        return (
            <>
                <div className="card m-3" style={{ width: '18rem' }} key={this.props.ind}>
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itm.partyName}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}
export default CardCom;