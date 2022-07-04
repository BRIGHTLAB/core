import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const styles = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    p: '20px',
    boxShadow: 24,
  },
};

interface Props {
  open: boolean;
  closeModal: () => void;
  children: any;
  width: string;
}

export default function Popup({ open, closeModal, children, width = '400px' }) {
  return (
    <Modal keepMounted open={open} onClose={closeModal}>
      <Box sx={{ ...styles.box, width: width }}>
        <Grid container>{children}</Grid>
      </Box>
    </Modal>
  );
}
