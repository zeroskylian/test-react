import React, { useState, useMemo } from 'react';
import format from 'date-fns/format';

export default function TestMemo() {
  const time = useTime();
  const [selectedNum, setSelectedNum] = useState(0);
  let allPrimes = useMemo(() => {
    return calculatePrimes(selectedNum);
  }, [selectedNum]);
  return (
    <React.Fragment>
      <p className="clock">{format(time, 'hh:mm:ss a')}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
            let num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className="prime-list">{allPrimes.join(', ')}</span>
      </p>
    </React.Fragment>
  );
}
function isPrime(n: number) {
  const max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true;
}

function useTime() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  return time;
}

function calculatePrimes(selectedNum: number) {
  const allPrimes: number[] = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }
  return allPrimes;
}
