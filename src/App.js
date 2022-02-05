import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'; 
import ChatFeed from './components/ChatFeed'; 

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "08c549b2-5850-4a1d-acf3-2e5c0c737690"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {... ChatAppProps} /> }
        />
    );
}

export default App;