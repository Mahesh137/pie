import React from "react";
import { Col, Row } from 'antd';
import GeoCharts from "../../Components/GeoCharts";
import PieCharts from "../../Components/PieCharts";
import AreaCharts from "../../Components/AreaCharts";
import OrgCharts from "../../Components/OrgCharts";
import RevenueChange from "../../Components/RevenueChange";

const PageThree = () => {


	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<PieCharts />
				</Col>
				<Col span={8}>
					<OrgCharts />
				</Col>
				<Col span={8}>
					<GeoCharts />
				</Col>
				<Col span={24}>
					<AreaCharts />
				</Col>
			</Row>
		</>
	);
};

export default PageThree;
