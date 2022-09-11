import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  let variant;
  if (isOnline) variant = 'is-online';
  if (!isOnline) variant = 'is-offline';
  return (
    <li className={css.item}>
      <span className={css[variant]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
