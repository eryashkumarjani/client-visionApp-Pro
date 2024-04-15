import dayjs from 'dayjs';
import { Layout, Space, Flex, Breadcrumb, Form, Input, Upload, Button, Select, DatePicker } from 'antd';
import { HomeOutlined, BookOutlined, FileImageOutlined, PhoneOutlined, ScheduleOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import ComplaintImg from '../../../assets/images/complaintImg.PNG'
import './RaiseTickets.scss';

const { Content } = Layout;
const { Option } = Select;

function RaiseTickets() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='raiseTicket' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/user'
                },
                {
                  title: 'Raise Tickets',
                },
              ]}
            />
            <div className='mainRaiseTicketContentArea'>
              <h2> Raise Ticket</h2>
              <div className="raiseTicketContainer">
                <div className='leftSide'>
                  <img src={ComplaintImg} alt='logo' />
                </div>
                <div className='rightSide'>
                  <Form autoComplete="off">

                    <Flex gap="small" className='raiseTicketFormArea' justify={'center'} align={'center'} vertical>
                      <Form.Item name="ticketTitle">
                        <Input
                          className='formInput'
                          placeholder="Enter Title of Ticket"
                          prefix={<ScheduleOutlined />} />
                      </Form.Item>

                      <Form.Item
                        name="ticketType"
                      >
                        <Select className='formInput' placeholder="select Ticket Type">
                          <Option value="funds">Funds</Option>
                          <Option value="people">People</Option>
                          <Option value="function">Function</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item name="dateOfRaisedTicket">
                        <DatePicker
                          picker="date"
                          className='formDate'
                          defaultValue={dayjs('01/01/2023', 'DD/MM/YYYY')} format={"DD/MM/YYYY"}
                        />
                      </Form.Item>

                      <Form.Item name="ticketDescription">
                        <Input
                          className='formInput'
                          placeholder="Enter Ticket description"
                          prefix={<BookOutlined />} />
                      </Form.Item>

                      <Form.Item name="phoneNumberOfUser">
                        <Input
                          className='formInput'
                          placeholder="Enter your Phone number"
                          prefix={<PhoneOutlined />} />
                      </Form.Item>

                      <Form.Item name="ticketIssueProofImage">
                        <Upload
                          action="/upload.do"
                          listType="picture"
                          maxCount={1}
                          multiple
                          className="formUpload"
                        >
                          <div>
                            <Button className='formButton' icon={<FileImageOutlined />} style={{ fontWeight: "lighter" }}> Upload Issue Image</Button>
                          </div>
                        </Upload>
                      </Form.Item>

                      <Form.Item>
                        <Button className='formButton' htmlType="submit">Raise Ticket</Button>
                      </Form.Item>
                    </Flex>
                  </Form>
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

export default RaiseTickets;
