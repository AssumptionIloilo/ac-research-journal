import React from 'react';
import { FormField } from 'payload/dist/admin/components/forms/Form/types';
import { useFieldType, useFormFields } from 'payload/components/forms';
import { slugify } from '../../../utilities/slugify';
import './slug-field.scss';

type SlugFieldProps = {
  /** Name of the field in this collection to be slugged. */
  fieldNameToSlug: string;
  /**
   * Field Props from admin.components.Field.
   *
   * @example
   * Field: (fieldProps: any) => JSX.Element
   */
  fieldProps?: any;
};

const SlugField: React.FC<SlugFieldProps> = (props) => {
  const { fieldNameToSlug, fieldProps } = props;

  const fieldToSlug = useFormFields(
    ([fields, dispatch]) => fields[fieldNameToSlug],
  );

  const { value, setValue } = useFieldType<string>({ path: fieldProps.path });

  function autoGenerateSlug() {
    const slug = slugify(fieldToSlug.value as string);

    setValue(slug);
  }

  return (
    <div className="field-type text slug-field">
      <label className="field-label">
        <span>Slug</span>
        <button type="button" onClick={autoGenerateSlug}>
          Generate
        </button>
      </label>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
      {fieldProps?.admin?.description && (
        <span className="field-description">
          {fieldProps.admin.description}
        </span>
      )}
    </div>
  );
};

export const makeSlugField = (props: SlugFieldProps) => (
  <SlugField {...props} />
);
