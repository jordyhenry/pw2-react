import React from 'react';
import { CircularProgress } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'

import { 
  DownloadButton,
  DownloadButtonText,
} from './styles'

const DownloadAllButton: React.FC<DownloadAllButtonProps> = ({
  isPackingFiles,
  hasOneOrLessFiles,
  onClick,
}) => {
  return (
    <DownloadButton
      disabled={isPackingFiles || hasOneOrLessFiles}
      onClick={onClick}
    >
      {isPackingFiles ? <CircularProgress size={24}/> : <SaveIcon/> }

      <DownloadButtonText>
        DOWNLOAD ALL
      </DownloadButtonText>
    </DownloadButton>
  );
}

interface DownloadAllButtonProps {
  isPackingFiles: boolean,
  hasOneOrLessFiles: boolean,
  onClick: () => void, 
}

export default DownloadAllButton;