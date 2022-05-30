"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Form = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stories = (0, _react2.storiesOf)('Form', module);
const fields = [{
  id: 'full_name',
  name: 'full_name',
  type: 'TextField',
  label: 'Full Name',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'email',
  name: 'email',
  type: 'TextField',
  label: 'Email',
  inputType: 'email',
  helperText: 'Please enter a valid email',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'image_url',
  name: 'image_url',
  type: 'FileUpload',
  label: 'Image',
  inputType: 'image',
  required: true,
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'deactivated',
  name: 'deactivated',
  type: 'RadioGroup',
  label: 'Active',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'supervisor_obj',
  name: 'supervisor_obj',
  type: 'Select',
  label: 'Supervisor',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'permission_obj',
  name: 'permission_obj',
  type: 'Select',
  label: 'Permission',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'company_obj',
  name: 'company_obj',
  type: 'Select',
  label: 'Company',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'departments_obj',
  name: 'departments_obj',
  type: 'Select',
  label: 'Department',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}, {
  id: 'positions_obj',
  name: 'positions_obj',
  type: 'Select',
  label: 'Position',
  required: true,
  data: [{
    value: '0',
    title: 'Yes'
  }, {
    value: '1',
    title: 'No'
  }],
  grid: {
    xs: 12,
    md: 6
  }
}];
stories.add('Init', () => {
  return /*#__PURE__*/_react.default.createElement(_Form.default, {
    fields: fields,
    handleChange: values => console.log('changed', values),
    defaultValues: {
      id: '14',
      roles_id: '1',
      departments_id: '5',
      positions_id: '1',
      full_name: 'Sara Soboh',
      email: 'ssoboh@bright-lab.com',
      image_url: 'https://static.mirsad.app/no-profile-picture.webp',
      total_points: '0',
      deactivated: '0',
      supervisor_obj: {
        value: '13',
        title: 'Nadine Nader'
      },
      permission_obj: false,
      company_obj: {
        value: '2',
        title: 'BRIGHT LAB'
      },
      departments_obj: {
        id: '5',
        value: '5',
        company_id: '2',
        title: 'QA'
      },
      positions_obj: {
        id: '1',
        value: '1',
        templates_id: '1',
        key: 'dev_fe',
        title: 'Frontend developer'
      }
    }
  });
});