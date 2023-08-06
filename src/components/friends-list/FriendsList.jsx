import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, selectedFriend, onSelection }) => {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;