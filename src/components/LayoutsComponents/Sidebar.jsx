import {

    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, } from 'antd';

const { Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    return (
        <div className=' h-[100vh] fixed top-0 left-0 bottom-0'>
            <Sider className='h-[100vh] w-[300px]' width={250} trigger={null} collapsible collapsed={collapsed}>
                <div className={` ${collapsed ? 'text-lg' : 'text-3xl'}  font-bold my-10 text-white text-center`}>Logo</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    className='px-2'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
        </div>
    );
};

export default Sidebar;