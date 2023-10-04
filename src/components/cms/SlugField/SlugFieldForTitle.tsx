import React from 'react';
import './slug-field.scss';
import { useFormFields } from 'payload/components/forms';
import BaseSlugField from './BaseSlugField';
import { Props } from 'payload/components/fields/Text';

const SlugFieldForTitle: React.FC<Props> = ({ path }) => {
  const titleField = useFormFields(([fields, dispatch]) => fields.title);

  return <BaseSlugField path={path as string} fieldToSlug={titleField} />;
};

export default SlugFieldForTitle;
