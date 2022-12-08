import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const createNewRoom = (e) => {
        e.preventDefault()
        const id = uuidV4()
        setRoomId(id);
        // console.log(id);
        toast.success('Created a new room');
    }

    const joinRoom = () => {
        if(!roomId || !username) {
            toast.error('ROOM Id & username is required')
            return;
        }

        //Redirect if roomid and username is present
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        })
    };

    const handleInputEnter = (e) => {
        if(e.code === 'Enter') {
            joinRoom()
        }
    }

  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <div className='homeLogoWrap'>
                <img className='homePageLogo' src="/logo-white.png" alt="code-sync-logo" />
                <h2 className='homeImgText'>Code Editor</h2>
            </div>
            <h4 className='main-label'>Paste invitation ROOM ID</h4>
            <div className='inputGroup'>
                <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />
                <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter} />
                <button onClick={(joinRoom)} className='btn joinBtn'>Join</button>
                <span className='creatInfo'>
                    If you don't have an invite then create &nbsp;
                    <a onClick={createNewRoom} href="" className='createNewBtn'>new room</a>
                    </span>
            </div>
        </div>
        <footer>
            <h4>Built with ❤️ by <a href="https://github.com/Anonymous1608">Aniket</a></h4>
        </footer>
    </div>
  )
}

export default Home;