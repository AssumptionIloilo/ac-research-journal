import React from 'react';
import './descriptions.scss';

type DescriptionWithHrefProps = {
  /** Text appearing before the displayed href. */
  displayedText: string;
  /** The Displayed href "/news" on the description with highlight */
  displayedHref: string;
  /**
   * When the user clicks the href, where does he get taken to?
   * Usually this should be the real link on the website.
   *
   * By default, it will go to the same link as `displayedHRef`
   */
  href?: string;
};
const DescriptionWithHref = ({
  displayedText,
  displayedHref,
  href,
}: DescriptionWithHrefProps) => {
  return (
    <>
      {displayedText}{' '}
      <a className="description-text" href={href ?? displayedHref}>
        {displayedHref}
      </a>
      .
    </>
  );
};

/**
 * Makes a description with Href component to be used on the
 * `description` property of a collection in Payload.
 */
export const makeDescriptionWithHref =
  (props: DescriptionWithHrefProps) => () =>
    <DescriptionWithHref {...props} />;
