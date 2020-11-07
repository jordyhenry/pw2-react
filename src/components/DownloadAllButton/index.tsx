import React from 'react';
import { Button, CircularProgress } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'

const DownloadAllButton: React.FC<DownloadAllButtonProps> = ({
  isPackingFiles,
  hasOneOrLessFiles,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      disabled={isPackingFiles || hasOneOrLessFiles}
      startIcon={isPackingFiles ? <CircularProgress size={24}/> : <SaveIcon /> }
      onClick={onClick}
    >
      Download All
    </Button>
  );
}

interface DownloadAllButtonProps {
  isPackingFiles: boolean,
  hasOneOrLessFiles: boolean,
  onClick: () => void, 
}

export default DownloadAllButton;