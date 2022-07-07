import { Carousel } from 'antd';
import React from 'react';
import './index.scss';

// Do cả chương trình chỉ có 1 list carousel
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/8_ontuqq_hi2nuh.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046097/2_b1d6dd_xgkb3i.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046097/4_amgb7n_p9i5vv.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/5_kfuyu2_evpu2q.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046097/1_ggor4n_a2iqyi.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/6_kt4deu_rq1uio.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046097/3_wwgin5_jvefjf.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046097/7_gokjlq_di5z5k.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/9_qq407q_qzq8go.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/10_pcgl2j_zsz6ly.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/11_vhqqe1_ntar6e.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/12_crycbe_eou3ru.webp',
  'https://res.cloudinary.com/t-engine/image/upload/v1657046098/13_ytp67u_cmyfb0.webp',
];

function SaleOff() {
  return (
    <Carousel className="Sale-Off" autoplay>
      {list.map((item, index) => (
        <img className="Sale-Off-img" src={item} key={index} />
      ))}
    </Carousel>
  );
}

export default SaleOff;
