import { useOutletContext } from 'react-router-dom';

const Profile = () => {

    const {name} = useOutletContext();
    
    return (
        <div>
            <h1>Profile</h1>
            <h2>name: {name}</h2>
        </div>
    )
}

export default Profile;