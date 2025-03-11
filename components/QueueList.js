"use client";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function QueueList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const socket = io();
    socket.on('updateQueue', (updatedQueue) => {
      setPatients(updatedQueue);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient._id}>{patient.name} - {patient.status}</li>
      ))}
    </ul>
  );
}