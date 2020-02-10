import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addUser, getLevelDescriptions} from '../../actions/user';
import {AddUserInput, AddUserRow, AddUserSubmit, SelectUserLevel} from "../../styled/client/User";

const AddUser = ({addUser}) => {
    const [username, setUsername] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [roleID, setRoleID] = useState('2');

    /**
     * This function  handles the adding of a user to the system from the form
     * @param e the event that occurs with a submit
     */
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password: tempPassword,
            roleID: roleID
        };
        addUser(user);
        setRoleID('2');
        setUsername('');
        setTempPassword('');
    }

    return (

            <form onSubmit={e => handleSubmit(e)}>
				<AddUserRow>
                <SelectUserLevel
                    name="role"
                    value={roleID}
                    onChange={e => setRoleID(e.target.value)}
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
