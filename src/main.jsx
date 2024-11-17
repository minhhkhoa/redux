import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import allReducers from './reducers/index.jsx';
import { createStore } from "redux"; // Từ redux
import { Provider } from "react-redux"; // Từ react-redux

//- tạo kho lưu trữ
const store = createStore(allReducers);

createRoot(document.getElementById('root')).render(
    <Provider store = { store }>
        <App />
    </Provider>
)
