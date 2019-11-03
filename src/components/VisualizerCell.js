import React from 'react';
import { LightTheme } from 'baseui';

export const VisualizerCell = ({ label, status, handleStatusChange }) => (
  <div
    onClick={() => handleStatusChange(label)}
    style={{
      // todo: these 3 properties are just for centering... is there a better way?
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      border: '1px solid white',
      padding: '2px',
      borderRadius: '8px',
      backgroundColor:
        status === 'YES'
          ? LightTheme.colors.accent
          : status === 'NO'
          ? LightTheme.colors.mono400
          : LightTheme.colors.accent200,
    }}
  >
    {label}
  </div>
);
