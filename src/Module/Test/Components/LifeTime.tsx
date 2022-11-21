import React, { createRef } from "react";

interface NewsData {
  id: number;
  content: string;
}

type NewsState = { news: NewsData[] };
export class News extends React.Component {
  ref = createRef<HTMLUListElement>();

  timer?: any;

  state: NewsState = { news: [] };

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    let height = this.ref.current?.scrollHeight
    return height
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<NewsState>,
    snapshot?: any
  ): void {
    let height = snapshot as number
    console.log('height', height)
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      let news1 = {
        id: this.state.news.length + 1,
        content: `新闻${this.state.news.length + 1}`,
      };
      let news = [news1, ...this.state.news];
      this.setState({
        news,
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  render(): React.ReactNode {
    return (
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          overflowY: "scroll",
          height: "150px",
          width: "200px",
          backgroundColor: "cyan",
        }}>
        <ul ref={this.ref}>
          {this.state.news.map((item) => {
            return <li key={item.id} style={{height:'20px'}}>{item.content}</li>;
          })}
        </ul>
      </div>
    );
  }
}
