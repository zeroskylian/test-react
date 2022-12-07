import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';

function TestAJAX() {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <div>
      <Input value={response ?? ''}></Input>
      <br />
      <Button
        onClick={() => {
          axios
            .get('http://127.0.0.1:8000/server')
            .then(function (value) {
              console.log(value.data);
              setResponse(value.data.value);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {});
        }}>
        发请求
      </Button>
    </div>
  );
}

export default TestAJAX;
