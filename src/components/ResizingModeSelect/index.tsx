import React from 'react';

import {
  Container,
  Label,
  ResizingSelect,
  ResizingSelectOption,
  ResizingModeDescription,
} from './styles'

import ResizignModesData from '../../utils/ResizingModesData'

const ResizingModeSelect: React.FC<ResizingModeSelectProps> = ( { resizingMode, onChange } ) => {
  const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>): void => {
    if (event.target.value !== undefined)
      onChange(event.target.value as number)
  } 

  return (
    <Container>
      <Label htmlFor="resizingModes">RESIZING MODE</Label>
      <ResizingSelect
        id="resizingModes" 
        value={resizingMode}
        onChange={handleSelectChange}
      >
        {
          ResizignModesData.map(({resizingMode, label}) => (
            <ResizingSelectOption key={resizingMode} value={resizingMode} >
              {label.toLocaleUpperCase()}
            </ResizingSelectOption>
          ))
        }
      </ResizingSelect>

      <ResizingModeDescription>
        {ResizignModesData[resizingMode].description}
      </ResizingModeDescription>
    </Container>
  );
}

interface ResizingModeSelectProps {
  resizingMode: number,
  onChange: (newResizingMode: number) => void,
}

export default ResizingModeSelect;