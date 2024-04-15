import { Layout, Space, Card, Breadcrumb, Button, Tabs, Row, Col, } from 'antd';
import { HomeOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import './BuyProducts.scss';

const { Content } = Layout;
const { Meta } = Card;

function BuyProducts() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='homemadeProducts' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/user'
                },
                {
                  title: 'Homemade Products',
                },
              ]}
            />
            <div className='mainHomemadeProductsContentArea'>
              <h2> Choose tabs to see Homemade products</h2>
              <div className="homemadeProductsContainer">
                <div className="leftContainer">
                  <Tabs tabPosition="left" defaultActiveKey="tab1">
                    <Tabs.TabPane tab="Woodwork" key="tab1">
                      <Row gutter={24}>
                        <Col className="cartItemBox">
                          <Card
                            // key={item._id}
                            bordered={false}
                            cover={
                              <img
                                alt="example"
                                src=""
                              />
                            }>
                            <Meta
                              title="item.productName"
                              description="item.productType"
                            />

                            <p> Price :- <b>₹&nbsp;item.productPrice </b></p>
                            <Button className="addToCartBtn" ghost type="primary" > ADD TO CART</Button>
                          </Card>
                        </Col>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Pottery" key="tab2">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Leather" key="tab3">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Jute" key="tab4">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Shell" key="tab5">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Phulkaris" key="tab6">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Zardozi" key="tab7">
                      <p> No Data...</p>
                    </Tabs.TabPane>
                  </Tabs>
                </div>
                <div className="rightContainer">
                  <h4> Shopping Cart</h4>
                  <Row gutter={12}>
                    <>
                      <Col span={24}>
                        <Card
                          // key={item._id}
                          className="shoppingCartBox"
                          bordered={true}>
                          <div className="startCart">
                            <img alt="Review Tickets" src="" width={35} />
                            <h4> item.productName</h4>
                          </div>
                          <div className="endCard">
                            <div className="quantity">
                              <PlusCircleOutlined />
                              <p>&nbsp;<b>item.productQuantity </b> &nbsp;</p>
                              <MinusCircleOutlined />
                            </div>
                            <div className="price">
                              <b>₹&nbsp;item.productPrice</b>
                              <label
                              > Remove </label>
                            </div>
                          </div>
                        </Card>
                      </Col>

                    </>
                  </Row>

                  <hr />
                  <Row gutter={12}>
                    <Col span={24}>
                      <Card
                        className="shoppingCartBox"
                        bordered={false}>
                        <div className="totalAmount">
                          <div className="totalQ">
                            <p> <strong> Sub-total : </strong> </p>
                            <span> totalQuantity items</span>
                          </div>
                          <div className="totalP">
                            <h2> ₹&nbsp;totalPrice/-</h2>
                          </div>
                        </div>
                      </Card>
                    </Col>

                    <Col span={24}>
                      <Button className="checkItOut"> CHECKOUT </Button>
                    </Col>
                  </Row>
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

export default BuyProducts;
