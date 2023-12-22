import React , {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';      

const HomePage = () => {

    const [value , setValue] = useState();
    
    const navigate = useNavigate()

    // navigate the user to another page - \room\room_code
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value]);                 

    return(
        <div>
            <input 
            
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            type="text" 
            placeholder='ENTER ROOM CODE'


            />
            <button onClick={handleJoinRoom}> JOIN </button>
        </div>
    
    ); 

};

export default HomePage;



