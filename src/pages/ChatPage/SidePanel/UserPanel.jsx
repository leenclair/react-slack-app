import React from 'react'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Image } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import app from '../../../firebase'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../../store/userSlice'

const UserPanel = () => {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth).then(() => {
        dispatch(clearUser());
    }).catch((error) => {
        console.error(error);
    });
}

  return (
    <div>
      <h3 style={{ color: 'white' }}>
        <IoChatbubblesOutline /> Chat App
      </h3>

      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <Image
          src={currentUser.photoURL}
          style={{ width: '30px', height: '30px', marginTop: '3px' }}
          roundedCircle
        />

        <Dropdown>
          <Dropdown.Toggle
            style={{ background: 'transparent', border: '0px' }}
            id="dropdown-basic"
          >
            {currentUser.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              프로필 사진 변경
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>
              로그아웃
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default UserPanel