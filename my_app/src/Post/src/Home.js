import PostList from './PostList';
import useFetch from './useFetch';
import Loading from './Loading';
import { Route } from 'react-router-dom';

const Home = () => {
  // const {
  //   error,
  //   isPending,
  //   data: posts,
  // } = useFetch('http://localhost:8000/posts');

  return (
    <div className="home">
      <Route>
        <PostList />
      </Route>
    </div>
  );
};

export default Home;

/* {error && <div>{error}</div>}
      {isPending && (
        <div>
          <Loading />
        </div>*/
