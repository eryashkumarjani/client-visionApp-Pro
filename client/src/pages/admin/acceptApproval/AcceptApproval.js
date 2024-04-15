import { Layout, Space, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import UnderConstructionImg from '../../../assets/images/underConstruction.png'
import './AcceptApproval.scss';

const { Content } = Layout;

function AcceptApproval() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='acceptApprovals' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Accept Approvals',
                },
              ]}
            />
            <div className='mainAcceptApprovalsContentArea'>
              <h2> Registration requests for Approvals</h2>
              <div className="acceptApprovalsContainer">
                <img src={UnderConstructionImg} alt='logo' />
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </>
  );
}

export default AcceptApproval;
