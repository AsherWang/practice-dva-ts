// import { Router, Route } from 'dva/router';
const app = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
// app.router(({ history }) => {
//   return (
//     <Router history={history}>
//       <Route path="/" component={App} />
//     <Router>
//   );
// });
export default app;
