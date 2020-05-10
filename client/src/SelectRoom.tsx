import React, { ChangeEvent } from 'react';
import { Button, Container, TextField, InputLabel } from '@material-ui/core';

declare interface SelectRoomProps {
    onRoomSelected: (room: string) => void;
}
declare interface SelectRoomState {
  roomName: string
}

export default class SelectRoom extends React.Component<SelectRoomProps, SelectRoomState> {
  componentDidMount() {
    this.setState({ roomName: 'my room'})
  }

  handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ roomName: event.target.value })
  }

  render() {
    const { roomName } = (this.state || {}) as SelectRoomState;
    return (
      <form>
        <InputLabel>
          Room:<br />
          <TextField fullWidth defaultValue={roomName || ''} autoFocus={true} onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleOnChange(e)} />
        </InputLabel><br />
        <Button fullWidth type="submit" variant="contained" color="primary" onClick={() => this.props.onRoomSelected(this.state.roomName || '')}>Join room</Button>
      </form>
    );
  }
}