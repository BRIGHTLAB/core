import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

// loading the default components
import Select from '../Select';
import FileUpload from '../FileUpload';
import TextField from '../TextField';
import RadioGroupComp from '../RadioGroup';
import CheckBox from '../CheckBox';

const components = {
  TextField: TextField,
  FileUpload: FileUpload,
  Select: Select,
  RadioGroup: RadioGroupComp,
  CheckBox: CheckBox,
};

type ComponentObjectKey = keyof typeof components;

// data: { value: string | number; title: string; attr?: object }[];

interface fieldsType {
  id: string;
  name: string;
  type: string;
  label: string;
  inputType: string;
  helperText: string;
  required: boolean;
  grid: {
    xs: number;
    md: number;
    lg: number;
    xl: number;
  };
  multi: boolean;
  data: any[];
}

interface customComponentsType {
  type: string;
  renderItem: (row: any) => void;
}

interface Props {
  fields: fieldsType[];
  defaultValues: {};
  errorValues: {};
  onChange: (values: any) => void;
  customComponents: customComponentsType[];
}

export default function Form({ defaultValues = {}, errorValues = {}, onChange, fields, customComponents = [] }: Props) {
  const [customFieldsData, setCustomFieldsData] = useState({});
  const [customFieldsErrorData, setCustomFieldsErrorData] = useState({});

  type DataObjectKey = keyof typeof customFieldsData;
  type ErrorDataObjectKey = keyof typeof customFieldsErrorData;

  useEffect(() => {
    setCustomFieldsData(defaultValues);
  }, [defaultValues]);

  useEffect(() => {
    setCustomFieldsErrorData(errorValues);
  }, [errorValues]);

  const handleFieldChange = (key: string, value: any, id: any) => {
    let tempFieldsData = { ...customFieldsData, [key]: value };

    setCustomFieldsData(tempFieldsData);
    if (onChange) onChange(tempFieldsData);
  };

  const renderFields = (data: fieldsType[], customComponents: customComponentsType[]) => {
    if (!data || data.length < 1) return null;

    return data.map((item: fieldsType, idx) => {
      // load each component
      let DynamicComponent: any;
      if (components[item.type as ComponentObjectKey]) {
        DynamicComponent = components[item.type as ComponentObjectKey];
      } else {
        DynamicComponent = ({
          defaultValues = {},
          errorValues = {},
          onChange,
          fields,
          customComponents = [],
        }: Props) => {
          for (var index in customComponents) {
            const row: customComponentsType = customComponents[index];
            if (row.type == item.type)
              return row.renderItem({ defaultValues, errorValues, onChange, fields, customComponents });
          }
          return null;
        };
      }

      return (
        <Grid item {...item.grid} key={'Dynamic_Form_' + idx}>
          <DynamicComponent
            {...item}
            type={item.inputType ?? undefined} //for textfield comp
            multi={item.multi ?? undefined} //for select comp
            fullWidth
            helperText={customFieldsErrorData[item.name as ErrorDataObjectKey] || item.helperText || undefined}
            error={item.name in customFieldsErrorData}
            value={customFieldsData[item.name as DataObjectKey] || null}
            handleChange={(name: string, value: any) => handleFieldChange(name, value, item.id)}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {renderFields(fields, customComponents)}
    </Grid>
  );
}
