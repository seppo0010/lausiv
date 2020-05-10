import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useSocket from 'use-socket.io-client';

enum ViewRoomStatus {
    Waiting,
    Connecting,
    Connected,
    Reconnecting,
    Failed,
}

declare interface ViewRoomState {
    status: ViewRoomStatus;
}

export default function ViewRoom() {
  let { room } = useParams()
  const [state, setState] = useState({ status: ViewRoomStatus.Waiting })
  const [socket] = useSocket();
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('room', room)
      setState({...state, status: ViewRoomStatus.Connected});
    })
    socket.on('connect_error', () => setState({...state, status: ViewRoomStatus.Failed}))
    socket.on('connect_timeout', () => setState({...state, status: ViewRoomStatus.Failed}))
    socket.on('error', () => setState({...state, status: ViewRoomStatus.Failed}))
    socket.on('disconnect', () => setState({...state, status: ViewRoomStatus.Failed}))
    socket.on('reconnect', () => setState({...state, status: ViewRoomStatus.Reconnecting}))
    socket.on('reconnect_error', () => setState({...state, status: ViewRoomStatus.Failed}))
    socket.on('reconnect_timeout', () => setState({...state, status: ViewRoomStatus.Failed}))
    return () => {
        socket.off('connect')
        socket.off('connect_error')
        socket.off('connect_timeout')
        socket.off('error')
        socket.off('disconnect')
        socket.off('reconnect')
        socket.off('reconnect_error')
        socket.off('reconnect_timeout')
    }
  })
  return (
    <>
      Welcome to {room}<br />
      {state.status === ViewRoomStatus.Connected ? 'Connected' : ''}
      {state.status === ViewRoomStatus.Connecting ? 'Connecting' : ''}
      {state.status === ViewRoomStatus.Reconnecting ? 'Reconnecting' : ''}
      {state.status === ViewRoomStatus.Failed ? 'Failed' : ''}
    </>
  )
}