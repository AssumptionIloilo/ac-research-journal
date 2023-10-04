import React from 'react';
import { FormField } from 'payload/dist/admin/components/forms/Form/types';
import { useFieldType, useFormFields } from 'payload/components/forms';
import { slugify } from '../../../utilities/slugify';

type BaseSlugFieldProps = {
  /** Name of the SlugField */
  path: string;
  /** Returned by useFormFields */
  fieldToSlug: FormField;
};

const BaseSlugField: React.FC<BaseSlugFieldProps> = ({ path, fieldToSlug }) => {
  const { value, setValue } = useFieldType<string>({ path });

  function autoGenerateSlug() {
    const slug = slugify(fieldToSlug.value as string);

    setValue(slug);
  }
  return (
    <div className="field-type text slug-field">
      <label className="field-label">
        <span>Slug</span>
        <button type="button" onClick={autoGenerateSlug}>
          Autogenerate
        </button>
      </label>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <br />
    </div>
  );
};

export default BaseSlugField;
