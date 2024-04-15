import { Layout, Space, Breadcrumb, Form, Input, Upload, Button } from 'antd';
import { HomeOutlined, FileImageOutlined, HeartFilled, WechatOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import ProfileImg from '../../../assets/images/profile.png';
import './CreatePosts.scss';

const { Content } = Layout;

function CreatePosts() {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout className='mainLayout'>
          <Headerr />
          <Content className='createPostsContent' style={{ overflowY: "scroll" }}>
            <Breadcrumb
              className="breadcrumBg"
              items={[
                {
                  title: <HomeOutlined />,
                  href: '/admin'
                },
                {
                  title: 'Create Posts',
                },
              ]}
            />
            <div className='mainPostsContentArea'>

              <div className="leftPostsContentArea">
                <h2> Posts</h2>
                <div className="postsForm" style={{ background: "White" }}>
                  <div className="imgOfAdmin" >
                    <img src={ProfileImg} alt='logo' width={50} />
                  </div>
                  <div className="addFormDetails">
                    <Form >
                      <Form.Item name="postText"
                        hasFeedback>
                        <Input
                          className='formInput'
                          placeholder="What's happening?" />
                      </Form.Item>
                      <div className="postSection">
                        <Form.Item name="postImg">
                          <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture"
                            maxCount={1}
                            multiple
                            className="postUpload"
                          >
                            <Button icon={<FileImageOutlined />}></Button>
                          </Upload>
                        </Form.Item>
                        <Button className="postBtn" htmlType="submit"> Post </Button>
                      </div>
                    </Form>
                  </div>
                </div>

                <div>
                  <div className="viewPosts">
                    <div className="postHeader" >
                      <img src={ProfileImg} alt='logo' width={25} />
                      <h5> Yashkumar Jani</h5>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postContent">
                      <p> postDescription </p>
                      <img src="" alt="post img" />
                    </div>
                    <div className="postFooter">
                      {/* <HeartOutlined /> */}
                      <HeartFilled className="likeIcon" /> <span> 10 Likes</span>

                      <WechatOutlined className="commentIcon" /> <span> 2 Comments</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="rightPostsContentArea">
                <h2> Activities</h2>
                <div className="postActivities">
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={ProfileImg} alt='logo' width={40} />
                      <h5> Ravi Patel </h5>
                      <p> has liked on your post.</p>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={ProfileImg} alt='logo' width={40} />
                      <h5> Kelu Modi </h5>
                      <p> has commented on your post.</p>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={ProfileImg} alt='logo' width={40} />
                      <h5> Kishan Jani </h5>
                      <p> has liked on your post.</p>
                      <span> 3 day ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
                  <div className="postActivityDetail" >
                    <div className="userDetail">
                      <img src={ProfileImg} alt='logo' width={40} />
                      <h5> Meet Pandya </h5>
                      <p> has commented on your post.</p>
                      <span> 1 week ago.</span>
                    </div>
                    <div className="postDetail">
                      <img src={"https://5.imimg.com/data5/ANDROID/Default/2022/12/SR/OL/XK/48484822/product-jpeg-1000x1000.jpg"} alt='logo' width={25} />
                    </div>
                  </div>
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

export default CreatePosts;
