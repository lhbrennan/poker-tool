import React from 'react';
import { LightTheme } from 'baseui';

export const VisualizerCell = ({ label, status, handleStatusChange }) => {
  const isPair = label.charAt(0) === label.charAt(1);

  return (
    <div
      onClick={() => handleStatusChange(label)}
      style={{
        // todo: these 3 properties are just for centering... is there a better way?
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: isPair ? '4px' : 'normal',
        border: isPair
          ? `2px solid ${LightTheme.colors.mono700}`
          : `1px solid ${LightTheme.colors.accent300}`,
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
};
