import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

import ResizignModesData from '../../utils/ResizingModesData'

const ResizingModeSelect: React.FC<ResizingModeSelectProps> = ( { resizingMode, onChange } ) => {
  const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
    if (event.target.value !== undefined)
      onChange(event.target.value as number)
  } 

  return (
    <>
      <InputLabel id="resizingModes">Resizing Mode</InputLabel>
      <Select 
        labelId="resizingModes" 
        id="resizingModes" 
        autoWidth={false} 
        labelWidth={200}
        value={resizingMode}
        onChange={handleSelectChange}
      >
        {
          ResizignModesData.map(({resizingMode, label}) => (
            <MenuItem key={resizingMode} value={resizingMode} >
              {label.toLocaleUpperCase()}
            </MenuItem>
          ))
        }
      </Select>

      <p>
        {ResizignModesData[resizingMode].description}
      </p>
    </>
  );
}

interface ResizingModeSelectProps {
  resizingMode: number,
  onChange: (newResizingMode: number) => void,
}

export default ResizingModeSelect;