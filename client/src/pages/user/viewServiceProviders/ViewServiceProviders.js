import { Layout, Space, Card, Breadcrumb, Tabs, Row, Col, } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import './ViewServiceProviders.scss';

const { Content } = Layout;
const { Meta } = Card;

function ViewServiceProviders() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='serviceProviders' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/user'
                },
                {
                  title: 'Service Providers',
                },
              ]}
            />
            <div className='mainServiceProvidersContentArea'>
              <h2> Choose tabs to see service products</h2>
              <div className="serviceProvidersContainer">
                <div className="tabContainer">
                  <Tabs tabPosition="left" defaultActiveKey="tab1">
                    <Tabs.TabPane tab="Tutor" key="tab1">
                      <Row gutter={24}>
                        <Col className="providerCard">
                          <Card
                            bordered={false}
                            className="cardDetail"
                            // key={index}
                            cover={
                              <img
                                alt="example"
                                src=""
                              />
                            }>
                            <Meta
                              title="el.providerName"
                              description="el.providerServiceType"
                            />
                            <h5> Location : <b>el.providerLocation. </b></h5>
                            {/* <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button> */}
                            <a className="chatBtn" href={``} > CHAT</a>
                          </Card>
                        </Col>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Stationery" key="tab2">
                      <Row gutter={24}>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            // key={index}
                            cover={
                              <img
                                alt="example"
                                src=""
                              />
                            }>
                            <Meta
                              title="el.providerName"
                              description="el.providerServiceType"
                            />
                            <h5> Location :- <b>el.providerLocation. </b></h5>
                            {/* <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button> */}
                            <a className="chatBtn" href={``} > CHAT</a>

                          </Card>
                        </Col>
                      </Row>

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Gym" key="tab3">
                      <Row gutter={24}>
                        <Col span={4}>
                          <Card
                            bordered={false}
                            className="cardDetail"
                            // key={index}
                            cover={
                              <img
                                alt="example"
                                src=""
                              />
                            }>
                            <Meta
                              title="el.providerName"
                              description="el.providerServiceType"
                            />
                            <h5> Location :- <b>"el.providerLocation". </b></h5>
                            {/* <Button type="primary" onClick={() => setOpen(true)}> View Detail</Button> */}
                            <a className="chatBtn" href={""} > CHAT</a>

                          </Card>
                        </Col>
                      </Row>

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Electronic Repair" key="tab4">
                      <p> No Data... </p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Hair Salon" key="tab5">
                      <p> No Data... </p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Pharmacy" key="tab6">
                      <p> No Data... </p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Carpenter" key="tab7">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </>
  );
}

export default ViewServiceProviders;
