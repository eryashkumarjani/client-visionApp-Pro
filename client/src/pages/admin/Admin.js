import { useNavigate } from "react-router-dom";
import { Layout, Space, Flex, Card } from 'antd';
import AcceptApprovalImg from '../../assets/images/Approvals.gif'
import TicketImg from '../../assets/images/Tickets.gif';
import FundsImg from '../../assets/images/Funds.gif';
import PostsImg from '../../assets/images/Posts.gif';
import ProductImg from '../../assets/images/Products.gif';
import ServiceProvidersImg from '../../assets/images/ServiceProviders.gif';
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";
import './Admin.scss';

const { Content } = Layout;
const { Meta } = Card;

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="Admin">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='mainDashboardContent'>
            <Flex gap="large" wrap="wrap" className='mainDashboardContentArea' justify={'center'}>
              <Card
                hoverable
                onClick={() => { navigate('/admin/acceptApproval'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Accept Approvals" src={AcceptApprovalImg} />}
              >
                <hr />
                <Meta title="Accept Approvals" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/admin/reviewTickets'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Review Tickets" src={TicketImg} />}
              >
                <hr />
                <Meta title="Review Tickets" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/admin/fundMonitorAdmin'); }}
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
                onClick={() => { navigate('/admin/createPosts'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Create Posts" src={PostsImg} />}
              >
                <hr />
                <Meta title="Create Posts" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/admin/addProducts'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Add Products" src={ProductImg} />}
              >
                <hr />
                <Meta title="Add Products" />
              </Card>
              <Card
                hoverable
                onClick={() => { navigate('/admin/addServiceProviders'); }}
                style={{
                  width: 250,
                }}
                className="cardContent"
                cover={<img alt="Add Service Providers" src={ServiceProvidersImg} />}
              >
                <hr />
                <Meta title="Add Service Providers" />
              </Card>
            </Flex>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </div >
  );
}

export default Admin;
