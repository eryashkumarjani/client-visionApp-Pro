import { Layout, Space, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import pageNotFoundImg from '../../assets/images/pageNotFound.png'
import './PageNotFound.scss';

const { Content } = Layout;

function PageNotFound() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout className='mainLayout'>
        <Content className='pageNotFound' style={{ overflowY: "scroll" }}>
          <Breadcrumb
            className="breadcrumBg"
            items={[
              {
                title: <HomeOutlined />,
                href: '/dashboard'
              },
              {
                title: 'Page Not Found',
              },
            ]}
          />
          <div className='mainPageNotFoundContentArea'>
            <div className="pageNotFoundContainer">
              <img src={pageNotFoundImg} alt='logo' />
            </div>
          </div>
        </Content>
      </Layout >
    </Space >
  );
}

export default PageNotFound;
