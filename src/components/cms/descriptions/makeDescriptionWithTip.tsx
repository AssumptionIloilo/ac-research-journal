import React, { FC } from 'react';
import './descriptions.scss';

type DescriptionWithTipProps = {
  text: string;
  tip: string;
};

const DescriptionWithTip: FC<DescriptionWithTipProps> = (props) => {
  const { text, tip } = props;
  return (
    <>
      {text}
      <br />
      <span className="tip-text">{tip}</span>
    </>
  );
};

export const makeDescriptionWithTip = (props: DescriptionWithTipProps) => () =>
  <DescriptionWithTip {...props} />;
