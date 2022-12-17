import React, { Component, useEffect, useState } from 'react';
import './NewTab.css';
import { Input } from 'antd';
import data from './backups.json';

export default class NewTab extends Component {
  render() {
    return (
      <div className="container">
        <img className="logo" src="logo192.png" alt="logo" />
        <Input className="input" placeholder="inp" />
        <BookmarkItemList />
      </div>
    );
  }
}

function BookmarkItemList() {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListItem[]>([]);
  useEffect(() => {
    let bookmark: BookmarkGroup = data;
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
