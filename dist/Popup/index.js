"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modal_1 = require("@mui/material/Modal");
const Box_1 = require("@mui/material/Box");
const Grid_1 = require("@mui/material/Grid");
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
function Popup({ open, closeModal, children, width = '400px' }) {
    return (<Modal_1.default keepMounted open={open} onClose={closeModal}>
      <Box_1.default sx={Object.assign(Object.assign({}, styles.box), { width: width })}>
        <Grid_1.default container>{children}</Grid_1.default>
      </Box_1.default>
    </Modal_1.default>);
}
exports.default = Popup;
