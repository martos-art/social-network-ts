import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import { RootStateType} from "./redux/state";


function App(props: { state: RootStateType }) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content' >

                    <Route exact path='/profile' render={() => <Profile state={props.state.profilePage}/>} />

                    <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
