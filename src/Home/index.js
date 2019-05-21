import React from 'react';
import { inject as Inject, observer as Observer } from 'mobx-react';
import Loading from 'react-loading';

import './Home.scss';

const style = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'center'
};

@Inject('store')
@Observer
class Home extends React.Component {
  componentDidMount() {
    this.props.store.PostStore.fetchPosts();
  }

  render() {
    const { posts, loading } = this.props.store.PostStore;
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
            loading
              ? (
                <tr>
                  <td colSpan={5} rowSpan={4}>
                    <div style={style}>
                      <Loading type="cubes" color="#000" />
                    </div>
                    로딩 중..
                  </td>
                </tr>
              )
              : (
                posts.length > 0
                ? postsDOM
                : (
                  <tr>
                    <td colSpan={5} rowSpan={4}>포스트가 존재하지 않습니다.</td>
                  </tr>
                )
              )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
