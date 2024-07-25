import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={style.friend__name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
