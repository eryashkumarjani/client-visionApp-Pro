import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card } from 'antd';
import TicketImg from '../../assets/images/Tickets.gif';
import FundsImg from '../../assets/images/Funds.gif';
import PostsImg from '../../assets/images/Posts.gif';
import ProductImg from '../../assets/images/Products.gif';
import ServiceProvidersImg from '../../assets/images/ServiceProviders.gif';
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";
import './User.scss';

const { Content } = Layout;
const { Meta } = Card;

function User() {
  const navigate = useNavigate();

  return (
    <div className="User">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='mainDashboardContent'>
            <Flex gap="large" wrap="wrap" className='mainDashboardContentArea' justify={'center'}>
              <Card
                hoverable
                onClick={() => { navigate('/user/raiseTickets'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Raise Tickets" src={TicketImg} />}
              >
                <hr />
                <Meta title="Raise Tickets" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/user/fundMonitorUser'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Fund Monitor" src={FundsImg} />}
              >
                <hr />
                <Meta title="Fund Monitor" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/user/viewPosts'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="View Posts" src={PostsImg} />}
              >
                <hr />
                <Meta title="View Posts" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/user/buyProducts'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Buy Products" src={ProductImg} />}
              >
                <hr />
                <Meta title="Buy Products" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/user/viewServiceProviders'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="View Service Providers" src={ServiceProvidersImg} />}
              >
                <hr />
                <Meta title="View Service Providers" />
              </Card>
            </Flex >
          </Content >
          <Footerr />
        </Layout >
      </Space >
    </div >
  );
}

export default User;
