/* eslint-disable react/jsx-key, react/jsx-props-no-spreading, jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const AppComponent: FC<AppProps> = ({ timeLeft, reset }) => (
  // // stateとsetStateの名前を決めている
  // const [timeLeft, setTimeLeft] = useState(LIMIT);

  // const reset = () => {
  //   setTimeLeft(LIMIT);
  // };

  // const tick = () => {
  //   // this.setStateの代わり
  //   setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  // };

  // useEffect(() => {
  //   // 一つのコンポーネント内で何回でも書ける。機能毎に書き分けるといい。
  //   const timerId = setInterval(tick, 1000);

  //   return () => clearInterval(timerId); // コンポーネントのアンマウント時に実行される。
  // }, []); // 空の配列を第二引数に渡す事でtimeraIdが初回レンダリング時のみ実行される。

  // return (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  </div>
);

export default AppComponent;
