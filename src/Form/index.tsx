import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

// loading the default components
import Select from '../Select';
import FileUpload from '../FileUpload';
import TextField from '../TextField';
import RadioGroupComp from '../RadioGroup';
import CheckBox from '../CheckBox';
import PlusBotton from './PlusBotton';

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

/**
 * @param defaultValues @type {object}
 * @returns -A Smart form of React Special Elements Based
 * on MUI and covered in MUI Grid item
 */
export default function Form({ defaultValues = {}, errorValues = {}, onChange, fields, customComponents = [] }: Props) {
  const [customFieldsData, setCustomFieldsData] = useState({});
  const [customFieldsErrorData, setCustomFieldsErrorData] = useState({});
  const [tempParentObject, setTempParentObject] = useState({});

  type DataObjectKey = keyof typeof customFieldsData;
  type ErrorDataObjectKey = keyof typeof customFieldsErrorData;
  type tempParentObjectKey = keyof typeof tempParentObject;

  useEffect(() => {
    if (Object.keys(defaultValues).length > 0) {
      setCustomFieldsData(defaultValues);
    }
  }, [defaultValues]);

  useEffect(() => {
    if (errorValues && Object.keys(errorValues).length > 0) {
      setCustomFieldsErrorData(errorValues);
    }
  }, [errorValues]);

  const handleFieldChange = (key: string, value: any, parentName?: string, parentIdx?: number) => {
    // if parentName exists means array and childs
    let tempFieldsData = {};
    if (parentName) {
      let tempArray: {}[] = [...(customFieldsData[parentName as DataObjectKey] ?? [])];

      if (tempArray.length > 0 && (parentIdx || parentIdx == 0)) {
        tempArray[parentIdx] = { ...tempArray[parentIdx], [key]: value };
      } else {
        tempArray.push({ [key]: value });
      }

      tempFieldsData = {
        ...customFieldsData,
        [parentName]: tempArray,
      };
    } else {
      tempFieldsData = {
        ...customFieldsData,
        [key]: value,
      };
    }

    setCustomFieldsData(tempFieldsData);
    if (onChange) onChange(tempFieldsData);
  };

  const renderFields = (
    data: fieldsType[],
    customComponents: customComponentsType[],
    parentName?: string,
    parentIdx?: number,
  ) => {
    if (!data || data.length < 1) return null;

    return data.map((item: fieldsType, idx) => {
      // load each component
      let DynamicComponent: any;

      if (item.type == 'Array') {
        //Recursive function
      } else if (components[item.type as ComponentObjectKey]) {
        DynamicComponent = components[item.type as ComponentObjectKey];
      } else {
        DynamicComponent = () => {
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
          {DynamicComponent ? (
            <DynamicComponent
              {...item}
              type={item.inputType ?? undefined} //for textfield comp
              multi={item.multi ?? undefined} //for select comp
              fullWidth
              helperText={customFieldsErrorData[item.name as ErrorDataObjectKey] || item.helperText || undefined}
              error={item.name in customFieldsErrorData}
              value={customFieldsData[item.name as DataObjectKey] || null}
              handleChange={(name: string, value: any) => handleFieldChange(name, value, parentName, parentIdx)}
            />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                  {item.label}{' '}
                  <PlusBotton
                    disabled={
                      customFieldsData[item.name as DataObjectKey] && customFieldsData[item.name as DataObjectKey][0]
                        ? false
                        : true
                    }
                    onClick={
                      customFieldsData[item.name as DataObjectKey] && customFieldsData[item.name as DataObjectKey][0]
                        ? () =>
                            setTempParentObject((oldTemp) => ({
                              ...oldTemp,
                              [item.name as tempParentObjectKey]: (oldTemp[item.name as tempParentObjectKey] ?? 0) + 1,
                            }))
                        : undefined
                    }
                  />
                </Typography>
              </Grid>
              {renderFields(item.data, [], item.name, 0)}
              {renderArray(item.name, item)}
            </Grid>
          )}
        </Grid>
      );
    });
  };

  const renderArray = (parentName: string | undefined, item: fieldsType) => {
    let HTML = [];
    for (let i = 1; i <= tempParentObject[parentName as tempParentObjectKey]; i++) {
      HTML.push(
        <Grid item xs={12} key={'parentName_' + parentName + '_' + i}>
          <hr></hr>
          {renderFields(item.data, [], item.name, i)}
        </Grid>,
      );
    }

    return HTML;
  };

  return (
    <Grid container spacing={2}>
      {renderFields(fields, customComponents)}
    </Grid>
  );
}
