import { observable as Observable, action as Action, flow } from 'mobx';
import axios from 'axios';

class PostStore {
  static __instance = null;
  static getInstance() {
    if (PostStore.__instance === null) {
      PostStore.__instance = new PostStore();
    }
    return PostStore.__instance;
  }
  constructor() {
    PostStore.__instance = this;
  }

  @Observable
  posts = [];

  @Observable
  loading = false;

  fetchPosts = flow(function* () {
    try {
      this.loading = true;
      const { data } = yield axios.get('http://localhost:8080/api/board/list');
      this.posts = data;
    }
    catch (err) {
      this.posts = [];
    }
    this.loading = false;
  });
}

export default PostStore.getInstance();
