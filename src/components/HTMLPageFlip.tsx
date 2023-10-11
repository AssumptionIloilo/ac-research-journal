import { FC, useEffect, useRef } from 'react';
import { PageFlip, SizeType } from 'page-flip';

type HTMLPageFlipType = {} & React.PropsWithChildren;

const HTMLPageFlip: FC<HTMLPageFlipType> = (props) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref?.current) return;

    const pageFlip = new PageFlip(ref.current, {
      width: 550, // base page width
      height: 733, // base page height

      size: 'stretch' as any,
      // set threshold values:
      minWidth: 315,
      maxWidth: 1000,
      minHeight: 420,
      maxHeight: 1350,

      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    });

    const childrens = Array.from(ref.current.children);

    pageFlip.loadFromHTML(childrens as HTMLElement[]);
  }, [ref]);

  return (
    <div
      className="hidden"
      ref={ref}
      style={{
        backgroundSize: 'cover',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default HTMLPageFlip;
