import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div>
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
          <tr>
            <td>10</td>
            <td>대소고 남현욱입니다.</td>
            <td>남현욱</td>
            <td>2019.05.16</td>
            <td>122</td>
          </tr>
          <tr>
            <td>9</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>8</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>7</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>6</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>5</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>4</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          <tr>
            <td>1</td>
            <td>ㅈㅈㅈ</td>
            <td>ㄱㄱㄱ</td>
            <td>2019.05.14</td>
            <td>230</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;