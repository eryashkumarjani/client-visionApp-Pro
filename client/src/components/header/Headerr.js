import { useNavigate } from "react-router-dom";
import { Layout, Flex } from 'antd';
import { Button } from 'antd';
import './Headerr.scss';

const { Header } = Layout;

function Headerr() {
  const navigate = useNavigate();

  return (
    <>
      <Header className='mainHeader'>
        <Flex className='mainContentArea' justify={'space-between'} align={'center'}>
          <Flex gap="small" justify={'flex-start'} align={'center'} wrap="wrap">
            <img src={process.env.PUBLIC_URL + '/Vision.png'} alt='logo' width={90} />
            <h1 className="brandName" style={{ margin: "0rem" }}> VISION APP</h1>
          </Flex>
          <Flex gap="small" justify={'flex-end'} align={'center'} wrap="wrap">
            <Button className='logoutBtn' onClick={() => { navigate('/'); }} > logout</Button>
          </Flex>
        </Flex>
      </Header >
    </>
  );
}

export default Headerr;
