import { Button, Layout, theme } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";

const { Header } = Layout;



// eslint-disable-next-line react/prop-types
const MainHeader = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' flex justify-between pr-4'>
                    <Button
                        type="text"
                        icon={collapsed ? <RxHamburgerMenu className=' w-7 h-7' /> : <RxHamburgerMenu className=' w-8 h-8' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div>About User</div>
                </div>
            </Header>
        </div>
    );
};

export default MainHeader;