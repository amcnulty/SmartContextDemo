import { useState } from 'react';

const EditUser = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div className='EditUser'>
            {isEditing ? (
                <div className='input-group mb-3'>
                    <label htmlFor='username' className='input-group-text'>
                        Edit Username:
                    </label>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='form-control'
                    />
                    <button
                        type='button'
                        className='btn btn-primary btn-sm'
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <button
                    className='btn btn-primary'
                    onClick={() => setIsEditing(true)}
                >
                    Edit Profile
                </button>
            )}
        </div>
    );
};

export default EditUser;
