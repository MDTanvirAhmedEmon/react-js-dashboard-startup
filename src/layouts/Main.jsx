import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from "../components/LayoutsComponents/Sidebar";
import MainHeader from "../components/LayoutsComponents/MainHeader";

const { Content } = Layout;


const Main = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div>
            <Layout>

                <Sidebar collapsed={collapsed} ></Sidebar>
                <Layout className={`${collapsed ? "ml-[80px]" : "ml-[250px]"} `}>
                    <MainHeader setCollapsed={setCollapsed} collapsed={collapsed}></MainHeader>
                    <Content
                        style={{}}
                    >
                        {/* my content */}
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Main;