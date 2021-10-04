// import PropTypes from "prop-types";
import s from "./FriendListItem.module.css"

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
        <div className={ isOnline ? s.online : s.offline }></div>
        <img className={s.avatar} src={avatar} alt="" width="48" />
        <p className={s.name}>{ name }</p>
    </>
  );
}

export default FriendListItem;