import { Layout, Space, Breadcrumb, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import UnderConsttructionImg from '../../../assets/images/underConstruction.png'
import './FundMonitor.scss';

const { Content } = Layout;

function FundMonitor() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='fundMonitor' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/admin'
                },
                {
                  title: 'Funds Monitor',
                },
              ]}
            />
            <div className='mainFundMonitorContentArea'>
              <div className="fundMonitorHeader">
                <h2> Funds Monitoring Chart</h2>
                <Button type="primary" onClick={() => { }}> ADD FUNDS</Button>
              </div>
              <div className="fundMonitorContainer">
                <img src={UnderConsttructionImg} alt='logo' />
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </>
  );
}

export default FundMonitor;
