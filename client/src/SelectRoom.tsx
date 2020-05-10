import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, InputLabel } from '@material-ui/core';
import { useHistory } from "react-router-dom";


export default function SelectRoom() {
  const [room, setRoom] = useState('my room')
  const history = useHistory()
  const onSubmit = () => { history.push(`/room/${room}`) }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputLabel>
        Room:<br />
        <TextField fullWidth defaultValue={room} autoFocus={true} onChange={(e: ChangeEvent<HTMLInputElement>) => setRoom(e.target.value)} />
      </InputLabel><br />
      <Button fullWidth type="submit" variant="contained" color="primary" onClick={() => onSubmit()}>Join room</Button>
    </form>
  );
}