import { Layout, Space, Flex, Breadcrumb, Form, Input, Upload, Button, Select, Table } from 'antd';
import { HomeOutlined, UserOutlined, FileImageOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import './AddServiceProviders.scss';

const { Content } = Layout;
const { Option } = Select;

function AddServiceProviders() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='addServiceProviders' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/admin'
                },
                {
                  title: 'Add Service Providers',
                },
              ]}
            />
            <div className='mainAddServiceProvidersContentArea'>
              <h2> Add service provider</h2>
              <div className="addServiceProvidersContainer">
                <Form autoComplete="off">

                  <Flex gap="small" className='addProviderFormArea' justify={'center'} align={'center'} vertical>
                    <Form.Item name="providerName">
                      <Input
                        className='formInput'
                        placeholder="Enter Provider Name"
                        prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item name="providerNumber">
                      <Input
                        className='formInput'
                        placeholder="Enter Provider Number"
                        prefix={<PhoneOutlined />} />
                    </Form.Item>

                    <Form.Item
                      name="providerService"
                    >
                      <Select className='formInput' placeholder="select Provider Service">
                        <Option value="tutor">Tutor</Option>
                        <Option value="fuelStation">Fuel Station</Option>
                        <Option value="stationery">Stationery</Option>
                        <Option value="plantNursery">Plant Nursery</Option>
                        <Option value="hairSalon">Hair Salon</Option>
                        <Option value="gym">Gym</Option>
                        <Option value="bakery">Bakery</Option>
                        <Option value="pharmacy">Pharmacy</Option>
                        <Option value="dairy">Dairy</Option>
                        <Option value="rlectronicRepair">Electronic Repair</Option>
                        <Option value="icecreamParlour">Icecream Parlour</Option>
                        <Option value="photographyAndVideography">Photography and Videography</Option>
                        <Option value="carpenter">Carpenter</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="providerLocation">
                      <Input
                        className='formInput'
                        placeholder="Enter Provider Location"
                        prefix={<EnvironmentOutlined />} />
                    </Form.Item>

                    <Form.Item name="providerImage">
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture"
                        maxCount={1}
                        // onChange={(e) => setPostImage(e.target.files[0])}
                        // value={postImage}
                        multiple
                        className="formUpload"
                      >
                        <div>
                          <Button icon={<FileImageOutlined />} style={{ fontWeight: "lighter" }}> Upload Provider Image</Button>
                        </div>
                      </Upload>
                    </Form.Item>

                    <Form.Item>
                      <Button className='formButton' htmlType="submit">Add Provider</Button>
                    </Form.Item>
                  </Flex>
                </Form>
              </div>
              <h2> List of service Providers</h2>
              <div className="listOfProviderContainer">
                <Form component={false}>
                  <Table
                    // columns={columns}
                    // columns={mergeColumns}
                    // components={{
                    //   body: {
                    //     cell: EditableCell,
                    //   },
                    // }}
                    // dataSource={modifiedData}
                    // bordered
                    // loading={loading}
                    scroll={{
                      y: 200,
                    }}
                  />
                </Form>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout >
      </Space >
    </>
  );
}

export default AddServiceProviders;
