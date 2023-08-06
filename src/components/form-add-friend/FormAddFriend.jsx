import React, { useState } from 'react';
import Button from '../button/Button';

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id, name, image: `${ image }?=${ id }`, balance: 0
    };
    onAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  };
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label >Friend name</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <label >Image URL</label>
      <input type="text" value={image} onChange={handleChangeImage} />
      <Button >Add</Button>
    </form>
  );
};

export default FormAddFriend;