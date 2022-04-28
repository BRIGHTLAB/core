import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({}));

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

  const renderFields = (data) => {
    if (!data) return null;
    if (data.length < 1) return null;

    return data.map((item, idx) => {
      // load each component by its file in the fields folder
      let DynamicComponent;
      if (!data[item.type]) {
        DynamicComponent = dynamic(() => import(`./fields/${item.type}`));
        data[item.type] = DynamicComponent;
      } else {
        DynamicComponent = data[item.type];
      }

      return (
        <DynamicComponent
          key={idx}
          {...item}
          fullWidth
          helperText={customFieldsErrorData[item.name] || item.helperText}
          error={item.name in customFieldsErrorData}
          value={customFieldsData[item.name] || null}
          onChange={(key, value) => handleFieldChange(key, value, item.id)}
        />
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {renderFields(props.fields)}
    </Grid>
  );
};

// type checking
DynamicForm.propTypes = {
  fields: PropTypes.array.isRequired,
  defaultValues: PropTypes.object,
  onChange: PropTypes.func,
};

DynamicForm.defaultProps = {
  defaultValues: [],
};

export default DynamicForm;
