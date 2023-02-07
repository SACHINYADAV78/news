import React, { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";
import { BsCurrencyBitcoin } from "react-icons/bs";
function Converter() {
  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const DefaultFirstSelect = "Bitcoin";
  const DefaultSecondSelect = "Ether";
  const [cryptoList, setCryptoList] = useState([]);
  const [inputValues, setInputValues] = useState("0");
  const [firstSelect, setFirstSelect] = useState(DefaultFirstSelect);
  const [SecondSelect, setSecondSelect] = useState(DefaultSecondSelect);
  const [result, setReslt] = useState("0");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    // const tempArray = [];
    // Object.entries(data).forEach((item) => {
    //   const tempObj = {
    //     value: item[1].name,
    //     label: item[1].name,
    //     rate: item[1].value,
    //   };
    //   tempArray.push(tempObj);
    // })

    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });
    setCryptoList(tempArray);
  }
  useEffect(() => {
    if (cryptoList.length === 0) return;
    const firstSelectRate = cryptoList.find((item) => {
      return item.value === firstSelect;
    }).rate;
    const SecondSelectRate = cryptoList.find((item) => {
      return item.value === SecondSelect;
    }).rate;
    const resultValue = (inputValues * SecondSelectRate) / firstSelectRate;
    setReslt(resultValue.toFixed(2));
  }, [inputValues, firstSelect, SecondSelect]);
  return (
    <div className="container">
      <Card
        className="crypto-card"
        title={
          <h2>
            {" "}
            <BsCurrencyBitcoin /> crypto convertor
          </h2>
        }
      >
        <Form size="large">
          <Form.Item>
            <Input onChange={(event) => setInputValues(event.target.value)} />
          </Form.Item>
        </Form>
        <div className="selectBox">
          <Select
            style={{ width: "200px" }}
            defaultValue={DefaultFirstSelect}
            options={cryptoList}
            onChange={(value) => {
              setFirstSelect(value);
            }}
          />
          <Select
            style={{ width: "200px" }}
            defaultValue={DefaultSecondSelect}
            options={cryptoList}
            onChange={(value) => {
              setSecondSelect(value);
            }}
          />
        </div>
        <p>
          {inputValues} {firstSelect} = {result} {SecondSelect}
        </p>
      </Card>
    </div>
  );
}

export default Converter;
