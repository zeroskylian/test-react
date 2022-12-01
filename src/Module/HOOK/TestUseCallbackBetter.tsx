import React from 'react';
import { Button } from 'antd/es/radio';

export default function TestUseCallbackBetter() {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = React.useMemo(() => {
    console.log('22');
    return function () {
      setCount((currentValue) => currentValue + 1234);
    };
  }, []);
  // const handleMegaBoost = React.useCallback(() => {
  //   setCount((currentValue) => currentValue + 1234);
  // }, []);
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
type MegaBoostP = { handleClick: () => void };
function MegaBoost(props: MegaBoostP) {
  console.log('Render MegaBoost');
  return <Button onClick={props.handleClick}>MEGA BOOST!</Button>;
}

const MegaBoostMemo = React.memo(MegaBoost);