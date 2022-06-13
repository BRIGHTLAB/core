import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

// loading the default components
import Select from '../Select';
import FileUpload from '../FileUpload';
import TextField from '../TextField';
import RadioGroupComp from '../RadioGroup';
const components = {
  TextField: TextField,
  FileUpload: FileUpload,
  Select: Select,
  RadioGroup: RadioGroupComp,
};

export default function Form(props) {
  const [customFieldsData, setCustomFieldsData] = useState([]);
  const [customFieldsErrorData, setCustomFieldsErrorData] = useState({});

  useEffect(() => {
    setCustomFieldsData(props.defaultValues);
  }, [props.defaultValues]);

  useEffect(() => {
    setCustomFieldsErrorData(props.errorValues);
  }, [props.errorValues]);

  const handleFieldChange = (key, value, id) => {
    let tempFieldsData = { ...customFieldsData, [key]: value };

    setCustomFieldsData(tempFieldsData);
    if (props.onChange) props.onChange(tempFieldsData);
  };

  const renderFields = (data, customComponents) => {
    if (!data || data.length < 1) return null;

    return data.map((item, idx) => {
      // load each component
      let DynamicComponent;
      if (components[item.type]) {
        DynamicComponent = components[item.type];
      } else {
        DynamicComponent = (props) => {
          for (var index in customComponents) {
            const row = customComponents[index];
            if (row.type == item.type) return row.renderItem(props);
          }
          return null;
        };
      }

      return (
        <Grid item {...item.grid} key={'Dynamic_Form_' + idx}>
          <DynamicComponent
            {...item}
            type={item.itemType ?? undefined} //for textfield comp
            multi={item.multi ?? undefined} //for select comp
            fullWidth
            helperText={customFieldsErrorData[item.name] || item.helperText}
            error={item.name in customFieldsErrorData}
            value={customFieldsData[item.name] || null}
            handleChange={(key, value) =>
              handleFieldChange(key, value, item.id)
            }
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {renderFields(props.fields, props.customComponents)}
    </Grid>
  );
}

// type checking
Form.propTypes = {
  fields: PropTypes.array.isRequired,
  defaultValues: PropTypes.object,
  errorValues: PropTypes.object,
  onChange: PropTypes.func,
  customComponents: PropTypes.array,
};

Form.defaultProps = {
  errorValues: {},
  customComponents: [],
};
