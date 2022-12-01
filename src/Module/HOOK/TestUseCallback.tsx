import React from 'react';
import { Button } from 'antd/es/radio';

export default function TestUseCallback() {
  const [count, setCount] = React.useState(0);

  function handleMegaBoost() {
    setCount((currentValue) => currentValue + 1234);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        textAlign: 'center',
        width: '50%',
      }}>
      Count: {count}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}>
        Add
      </Button>
      <MegaBoostMemo handleClick={handleMegaBoost} />
    </div>
  );
}

function MegaBoost(props: { handleClick: () => void }) {
  console.log('Render MegaBoost');
  return <Button onClick={props.handleClick}>MEGA BOOST!</Button>;
}

const MegaBoostMemo = React.memo(MegaBoost);