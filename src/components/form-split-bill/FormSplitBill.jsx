import React, { useState } from 'react';
import Button from '../button/Button';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByuser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByuser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (!bill) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByuser);
  };
  const handleValueBill = (e) => {
    setBill(Number(e.target.value));
  };
  const handlePaidByUser = (e) => {
    setPaidByUser(Number(e.target.value));
  };
  const handleChangeWhoIsPaying = (e) => {
    setWhoIsPaying(e.target.value);
  };
  return (
    <form className='form-split-bill' onSubmit={hanldeSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label >Bill value</label>
      <input type="text" value={bill} onChange={handleValueBill} />
      <label >Your expence</label>
      <input type="text" value={paidByuser} onChange={handlePaidByUser} />
      <label >{selectedFriend.name}'s expence</label>
      <input type="text" disabled value={paidByFriend} />
      <label >Who is paying the bill ?</label>
      <select value={whoIsPaying} onChange={handleChangeWhoIsPaying}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;