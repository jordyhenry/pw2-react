import { RESIZING_MODES } from 'pw2'

const ResizingModesData: IResizingModesData[] = [
  {
    resizingMode: RESIZING_MODES.NEAREST_PW2,
    label: 'nearest pw2',
    description: `This mode resizes your texture looking for the nearest power of two value for each dimension.
    If your dimension is already a pw2 value it will return itself.`
  },
  {
    resizingMode: RESIZING_MODES.PREVIOW_PW2,
    label: 'previous pw2',
    description: `This mode resizes your texture looking for the previous power of two value for each dimension.
    If your dimension is already a pw2 value it will return the pw2 value below it.`
  },
  {
    resizingMode: RESIZING_MODES.NEXT_PW2,
    label: 'next pw2',
    description: `This mode resizes your texture looking for the nearest power of two value for each dimension.
    If your dimension is already a pw2 value it will return the pw2 value above it.`
  }
]

export interface IResizingModesData {
  resizingMode: number,
  label: string,
  description: string,
}

export default ResizingModesData
