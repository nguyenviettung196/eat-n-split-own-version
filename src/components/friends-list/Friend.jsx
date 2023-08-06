import React from 'react';
import Button from '../button/Button';

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  const handleSelectFriend = () => {
    onSelection(friend);
  };
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className='red'>You own {friend.name} {Math.abs(friend.balance)}$</p>}
      {friend.balance > 0 && <p className='green'>{friend.name} owns you {Math.abs(friend.balance)}$</p>}
      {friend.balance === 0 && <p className=''>You and {friend.name} are even</p>}
      <Button onClick={handleSelectFriend}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
};

export default Friend;