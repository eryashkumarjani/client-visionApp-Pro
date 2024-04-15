import { Layout, Space, Flex, Breadcrumb, Form, Input, Upload, Button, Select, Table } from 'antd';
import { HomeOutlined, BookOutlined, FileImageOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import './AddProducts.scss';

const { Content } = Layout;
const { Option } = Select;

function AddProducts() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='addProducts' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/dashboard'
                },
                {
                  title: 'Add Products',
                },
              ]}
            />
            <div className='mainAddProductsContentArea'>
              <h2> Add Products</h2>
              <div className="addProductsContainer">
                <Form autoComplete="off">

                  <Flex gap="small" className='addProductsFormArea' justify={'center'} align={'center'} vertical>
                    <Form.Item name="productName">
                      <Input
                        className='formInput'
                        placeholder="Enter Product Name"
                        prefix={<BookOutlined />} />
                    </Form.Item>

                    <Form.Item name="productPrice">
                      <Input
                        className='formInput'
                        placeholder="Enter Product Price"
                        prefix={<b>&#8377;</b>} />
                    </Form.Item>

                    <Form.Item
                      name="productType"
                    >
                      <Select className='formInput' placeholder="select Product Type">
                        <Option value="woodwork">Woodwork</Option>
                        <Option value="pottery">Pottery</Option>
                        <Option value="leather">Leather</Option>
                        <Option value="jute">Jute</Option>
                        <Option value="shell">Shell</Option>
                        <Option value="phulkaris">Phulkaris</Option>
                        <Option value="zardozi">Zardozi</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="productImage">
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
                          <Button icon={<FileImageOutlined />} style={{ fontWeight: "lighter" }}> Upload Product Image</Button>
                        </div>
                      </Upload>
                    </Form.Item>

                    <Form.Item>
                      <Button className='formButton' htmlType="submit">Add Products</Button>
                    </Form.Item>
                  </Flex>
                </Form>
              </div>
              <h2> List of Products</h2>
              <div className="listOfProductsContainer">
                <Form component={false}>
                  <Table
                    // columns={columns}
                    // columns={mergeColumns}
                    components={{
                      // body: {
                      //   cell: EditableCell,
                      // },
                    }}
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

export default AddProducts;
