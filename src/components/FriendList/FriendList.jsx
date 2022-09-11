import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import friends from './friends.json';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(item => {
        return <FriendListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
