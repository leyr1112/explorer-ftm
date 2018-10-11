import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import io from 'socket.io-client';
import Header from 'views/components/header/header';
import Footer from 'views/components/footer/footer';
import LatestTransactions from 'views/containers/home/latest-transactions';
import LatestBlocks from 'views/containers/home/latest-blocks';
import MarketCap from 'views/containers/home/market-cap';
import Chart from 'views/containers/chart/index';

export default class HomePage extends Component {
  render() {
    // const socket = io();
    return (
      <div>
        <Header {...this.props} />
        <section className="bg-dark intro " style={{ paddingTop: '89px', paddingBottom: '112px' }}> <Container>
          <MarketCap />
          <Row>
            <Col>
              <Chart />
            </Col>
          </Row>
        </Container>
        </section>
        {/* <section id="latest-blocks" className="bg-theme">
          <Container>
            <Row className="mx-md-0">
              <LatestTransactions />
              <LatestBlocks />
            </Row>
          </Container>
        </section> */}
        <Footer />
      </div>
    );
  }
}