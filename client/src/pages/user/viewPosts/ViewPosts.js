import { Layout, Space, Breadcrumb } from 'antd';
import { HomeOutlined, HeartFilled, WechatOutlined } from '@ant-design/icons';
import Headerr from '../../../components/header/Headerr';
import Footerr from '../../../components/footer/Footerr';
import ProfileImg from '../../../assets/images/profile.png';
import './ViewPosts.scss';

const { Content } = Layout;

function ViewPosts() {
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
                  href: '/user'
                },
                {
                  title: 'View Posts',
                },
              ]}
            />
            <div className='mainPostsContentArea'>

              <div className="leftPostsContentArea">
                <h2> View Posts</h2>
                <div>
                  <div className="viewPosts">
                    <div className="postHeader" >
                      <img src={ProfileImg} alt='user logo' width={25} />
                      <h5> Yashkumar Jani</h5>
                      <span> 1 day ago.</span>
                    </div>
                    <div className="postContent">
                      <p > postDescription </p>
                      <img src="" alt='post' />
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

export default ViewPosts;
