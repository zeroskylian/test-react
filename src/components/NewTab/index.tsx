import React, { Component, useEffect, useState } from 'react';
import './index.css';
import { Input } from 'antd';
import data from './backups.json';

export class NewTab extends Component {
  render() {
    const placeholder = 'test212221'
    return (
      <div className="container">
        <img className="logo" src="vite.svg" alt="logo" />
        <Input className="input" placeholder={placeholder} />
        <BookmarkItemList />
      </div>
    );
  }
}

function BookmarkItemList() {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListItem[]>([]);
  useEffect(() => {
    const bookmark: BookmarkGroup = data;
    setBookmarkList(bookmark.classified);
  }, []);

  return (
    <div className="bookmarkItemList">
      {bookmarkList.map((bookmarkItem) => {
        return <BookmarkItem key={bookmarkItem.name} item={bookmarkItem} />;
      })}
    </div>
  );
}

function BookmarkItem(props: { item: BookmarkListItem }) {
  return (
    <div className="bookmarkItem">
      <div>
        <p className="categoryTitle">{props.item.name}</p>
      </div>
      <div className="bookmarkList">
        {props.item.set.map((bookmark) => {
          return (
            <div key={bookmark.id} className="bookmark">
              <p>{bookmark.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface BookmarkGroup {
  classified: BookmarkListItem[];
}

interface BookmarkListItem {
  name: string;
  set: Bookmark[];
}

interface Bookmark {
  id: string;
  link: string;
  name: string;
}
