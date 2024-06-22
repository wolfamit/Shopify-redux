import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
