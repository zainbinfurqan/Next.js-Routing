import React, { Component } from 'react';
import Header from '../../component/common/header'
import Head from 'next/head'
import { withRouter } from 'next/router'
import PrtyData from '../../data/Data'

class PartyWorkers extends Component {
    constructor() {
        super()
        this.state = {
            partyWorkerId: '',
            partyData: []
        }
    }

    componentDidMount() {
        console.log(this.props.router.query)
        let result = PrtyData.filter(itm => itm.partyID == this.props.router.query.partyId)
        this.setState({ partyWorkerId: this.props.router.query.partyId, partyData: result })

    }

    render() {
        return (
            <>
                <Head>
                    <title>Parties</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                </Head>
                <Header />
                <div className='container d-flex flex-row flex-wrap justify-content-center'>

                    {this.state.partyData.length > 0 && this.state.partyData[0].partyWorkers.map((itm, ind) => {
                        return (
                            <div className="card m-3" style={{ width: '18rem' }} key={this.props.ind}>
                                <div className="card-body">
                                    <h5 className="card-title">Name: {itm.workerName}</h5>
                                    <p className="card-text "> Work:
                                     <span className='font-weight-bold'>{itm.asignWork}</span>
                                    </p>
                                    <p className="card-text">Date Of Joining:
                                    <span className='font-weight-bold'>{itm.dateOfJoin}</span></p>
                                    <a className="btn btn-primary" >Go somewhere</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}
PartyWorkers.getInitialProps = ({ query }) => {
    return { query }
}
export default withRouter(PartyWorkers);