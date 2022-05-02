import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

// loading the default components
import Select from "../Select";
import FileUpload from "../FileUpload";
import TextField from "../TextField";

const DynamicForm = (props) => {
  const [customFieldsData, setCustomFieldsData] = useState([]);
  const [customFieldsErrorData, setCustomFieldsErrorData] = useState({});

  useEffect(() => {
    setCustomFieldsData(props.defaultValues);
  }, [props.defaultValues]);

  const handleFieldChange = (key, value, id) => {
    // add the object inside the array
    const newObj = {
      id,
      products_fields_id: id,
      [key]: value,
      value,
      key,
    };

    const newFieldsData = [];
    // loop through the array and check
    customFieldsData.forEach((item) => {
      if (item.id != newObj.id) newFieldsData.push(item);
    });

    // add it to the array
    newFieldsData.push(newObj);

    setCustomFieldsData(newFieldsData);
    if (props.onChange) props.onChange(newFieldsData);
  };

  const renderFields = (data, customComponents) => {
    if (!data) return null;
    if (data.length < 1) return null;

    return data.map((item, idx) => {
      // load each component
      let DynamicComponent;
      switch (item.type) {
        case "Select":
          DynamicComponent = (props) => <Select {...props} />;
          break;

        case "TextField":
          DynamicComponent = (props) => <TextField {...props} />;
          break;

        case "FileUpload":
          DynamicComponent = (props) => <FileUpload {...props} />;
          break;

        // if the component is different than the one we have, that means the user has defined
        default:
          DynamicComponent = (props) => {
            for (var index in customComponents) {
              const row = customComponents[index];
              if (row.type == item.type) return row.renderItem(props);
            }
            return null;
          };
          break;
      }

      return (
        <Grid item {...item.grid}>
          <DynamicComponent
            key={idx}
            {...item}
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
};

// type checking
DynamicForm.propTypes = {
  fields: PropTypes.array.isRequired,
  defaultValues: PropTypes.object,
  onChange: PropTypes.func,
  customComponents: PropTypes.array,
};

DynamicForm.defaultProps = {
  defaultValues: [],
  customComponents: [],
};

export default DynamicForm;
