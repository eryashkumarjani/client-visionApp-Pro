import { Layout, Space, Breadcrumb, Row, Col } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import './ReviewTickets.scss';

const { Content } = Layout;

function ReviewTickets() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='reviewTicket' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/admin'
                },
                {
                  title: 'Raised TIckets',
                },
              ]}
            />
            <div className='mainReviewTicketContentArea'>
              <h2> Raised tickets by colony members</h2>
              <div className="reviewTicketContainer">
                <Row gutter={24}>
                  <Col className="colWidth" >
                    <div className="insideColumn">
                      <div className="profileImg">
                        <img src="" alt='logo' />
                        <h2> Meet Pandya </h2>
                      </div>
                      <div className="profileMsg">
                        <p> He has created the ticket for <strong> </strong> regarding the <b>  </b> on <b> </b> where the issue is <b> ( )</b> click on chat button to get more details. </p>
                        <a className="chatBtn" href='' > CHAT</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </>
  );
}

export default ReviewTickets;
