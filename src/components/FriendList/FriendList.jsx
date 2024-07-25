import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend__list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
