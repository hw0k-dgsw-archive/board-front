import React from 'react';
import { inject as Inject, observer as Observer } from 'mobx-react';

import './Home.scss';

@Inject('store')
@Observer
class Home extends React.Component {
  componentDidMount() {
    this.props.store.PostStore.fetchPosts();
  }

  render() {
    const { posts } = this.props.store.PostStore;
    const postsDOM = posts.map(post => (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>{post.created}</td>
        <td>?</td>
      </tr>
    ));
    return (
      <div className="centered">
        <div className="title">
          게시판
        </div>
        <table>
          <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
          </thead>
          <tbody>
          {
            posts.length > 0
              ? postsDOM
              : (
                <tr>
                  <td colSpan={5}>로딩중.....</td>
                </tr>
              )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
