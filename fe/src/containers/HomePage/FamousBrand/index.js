import { Col, Row } from 'antd';
import React from 'react';
import './index.scss';

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="Photo" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// danh sách thương hiệu
const list = [
  {
    link: 'https://vn.msi.com/',
    src:
      'https://res.cloudinary.com/t-engine/image/upload/v1657046099/msi_zjnihe_pjrjov.webp',
    title: 'MSI',
    desc: 'Bé rồng đỏ siêu cute, gaming',
  },
  {
    link: 'https://www8.hp.com/us/en/home.html',
    src:
      'https://res.cloudinary.com/t-engine/image/upload/v1657046099/hp_cdxdv8_eapu1s.webp',
    title: 'HP',
    desc: 'Laptop siêu cấp vip pro',
  },
  {
    link: 'https://www.lenovo.com/vn/vn/',
    src:
      'https://res.cloudinary.com/t-engine/image/upload/v1657046099/lenovo_trmmkt_bdf9i8.webp',
    title: 'LENOVO',
    desc: 'Siêu ưu đãi cùng với LENOVO',
  },
  {
    link: 'https://www.lg.com/vn',
    src:
      'https://res.cloudinary.com/t-engine/image/upload/v1657046099/lg_yijaob_h2qmgd.webp',
    title: 'LG',
    desc: 'Sản phẩm siêu chất lượng',
  },
];

// rendering ...
function FamousBrand() {
  return (
    <div className="p-16 Famous-Brand">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
          <div className="underline-title"></div>
        </Col>
        {showBrandList(list)}
      </Row>
    </div>
  );
}

export default FamousBrand;
