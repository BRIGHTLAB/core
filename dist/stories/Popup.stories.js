"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@storybook/react");
const Popup_1 = require("../Popup");
const stories = (0, react_2.storiesOf)('Popup', module);
stories.add('Popup', () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    return (<div>
      <button onClick={() => setOpen(!open)}>open modal</button>
      <Popup_1.default open={open} closeModal={() => setOpen(false)} width="800px">
        abc
      </Popup_1.default>
    </div>);
});
