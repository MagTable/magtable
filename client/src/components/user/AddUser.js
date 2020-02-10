import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../actions/user';
import {useDispatch} from 'react-redux';
import {AddUserInput, AddUserRow, AddUserSubmit, SelectUserLevel} from "../../styled/client/User";

const AddUser = ({addUser}) => {
    const [role, setRole] = useState('2');
    const [username, setUsername] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            roleID: role,
            username: username,
            password: tempPassword
        };
        addUser(user);
        setRole('2');
        setUsername('');
        setTempPassword('');
    }

    return (

            <form onSubmit={e => handleSubmit(e)}>
				<AddUserRow>
                <SelectUserLevel
                    name="role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                >
                    <option value="1">System Manager</option>
                    <option value="2" defaultValue={2}>
                        Personnel Manager
                    </option>
                    <option value="3">Mechanic</option>
                </SelectUserLevel>
                <AddUserInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <AddUserInput
                    type="text"
                    name="tempPassword"
                    placeholder="Temp password"
                    value={tempPassword}
                    required
                    onChange={e => setTempPassword(e.target.value)}
                />
                <AddUserSubmit type="submit" value="Add User"/>
				</AddUserRow>
            </form>
    );
};

AddUser.propTypes = {};

export default connect(null, {addUser})(AddUser);
