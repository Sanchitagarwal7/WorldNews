import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
function App(){
    const size = 6;

    const [progress, setProgress] = useState(0);
    
    const api = process.env.REACT_APP_NEWS_API;

    const changeProgress = (progress)=>{
        setProgress(progress);
    }
    // render() {
        return (
            <>
            <BrowserRouter>
            <Navbar/>
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={3}
                loaderSpeed={750}
            />
                <Routes>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="general"/>} path='/'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="entertainment"/>} path='/entertainment'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="business"/>} path='/business'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="sports"/>} path='/sports'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="health"/>} path='/health'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="science"/>} path='/science'></Route>
                    <Route element={<News setProgress={changeProgress} apiKey={api} pageSize={size} category="technology"/>} path='/technology'></Route>
                    <Route element={<About/>} path='/about'></Route>
                </Routes>
            </BrowserRouter>
            </>
        );
    // }  render closing bracket
}

export default App;

