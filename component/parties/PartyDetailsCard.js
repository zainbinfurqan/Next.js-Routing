import React, { Component } from 'react'
import router from 'next/router'

class PartyDetailsCard extends Component {


    partDetailHandle = (id) => {
        console.log(id)
        router.push({
            pathname: '/partyworkers',
            query: { partyId: id }
        })
        // router.push({
        //     pathname: '/partyworkers',
        //     query: { partyId: id }
        // })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <div className="card m-3" style={{ width: '18rem' }} key={this.props.ind}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itm.partyName}{this.props.itm.partyID}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a className="btn btn-primary" onClick={() => this.partDetailHandle(this.props.itm.partyID)}>Go To Detail</a> */}
                        <a className="btn btn-primary text-white" onClick={() => this.partDetailHandle(this.props.itm.partyID)}>Go To Detail</a>
                    </div>
                </div>
            </>
        )
    }
}
export default PartyDetailsCard;