import React, { useEffect } from 'react';
import { Card, Col, Row, Typography, Progress, Button } from 'antd';

import { useState } from 'react';
import axios from 'axios';

import '../css/home.css';
import logo from '../css/logo-kita-bisa2.png';

const { Title } = Typography;

const Home = () => {
  let [dataProduct, setDataProduct] = useState([]);
  let [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    let getData = async () => {
      try {
        let result = await axios.get(
          `https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json`
        );
        const resultData = result.data;
        setDataProduct([...resultData.data]);
        setLoadingStatus(false);
        return result;
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [loadingStatus, setLoadingStatus]);

  let convertToRupiah = (angka) => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
    rupiah = rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('');
    return 'Rp. ' + (rupiah.length < 1 ? '0' : rupiah) + ',-';
  };

  //   console.log(dataProduct);

  return (
    <>
      <div>
        <img width={50} height={50} className="logo" src={logo} />
        <Title>Kitabisa</Title>
        <Button style={{ marginTop: 20, marginLeft: 1000 }}>
          Sorting By Donation Goal
        </Button>
      </div>
      <div>
        <div className="container-home">
          {/* {loadingStatus && <SkeletonComponent />} */}
          {dataProduct !== null && (
            <>
              {dataProduct.map((res, index) => {
                return (
                  //   <Link key={index} to={`/movie/detail/${res.id}`}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={res.image}
                        width={240}
                        height={240}
                      />
                    }
                  >
                    <p>{res.title}</p>
                    <Progress
                      percent={Math.floor(res.donation_percentage * 100)}
                      size="small"
                      status="active"
                      strokeColor={
                        Math.floor(res.donation_percentage * 100) <= 100
                          ? 'grey'
                          : 'pink'
                      }
                      //   format={(percent) => `${percent * 100} %`}
                    />
                    <Row gutter={50}>
                      <Col span={17}>
                        <p>Terkumpul</p>
                        <p>{convertToRupiah(res.donation_received)}</p>
                      </Col>
                      <Col span={5}>
                        <p>Sisa hari</p>
                        <p>{res.days_remaining}</p>
                      </Col>
                    </Row>
                  </Card>
                  //   </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
