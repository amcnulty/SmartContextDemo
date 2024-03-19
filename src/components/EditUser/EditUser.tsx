import { useState } from 'react';
import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';
import { DEFAULT_USERNAME } from '../../constants/constants';

const EditUser = () => {
    const { setUsername } = useContextSetters(appContext);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsernameLocal] = useState(DEFAULT_USERNAME);

    const handleSaveClick = () => {
        setIsEditing(false);
        setUsername(username);
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
                        onChange={(event) =>
                            setUsernameLocal(event.target.value)
                        }
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
