import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"

function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, id, isOnline }) => (
                <li key={id} className={s.item}>
                    <FriendListItem avatar={avatar} name={name} id={id} isOnline={isOnline}/>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
        }),
    ),
};
export default FriendList;