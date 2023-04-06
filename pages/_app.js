import '../styles/globals.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}

export default App;