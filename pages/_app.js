import '../styles/globals.css'
import Layout from './../component/layout';
import { Provider } from "react-redux";

import store from "../store/store";

function MyApp({ Component, pageProps }) {
  var url="http://127.0.0.1:4000/"
  return (<Provider store={store}><Layout><Component {...pageProps} /></Layout></Provider>)
}

export default MyApp
