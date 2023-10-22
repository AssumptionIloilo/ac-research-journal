import { Icon } from '@iconify/react';
import { NewsCardItemsType } from 'data/data';

const NewsCard = ({
  img,
  text,
  date,
  bgColor,
  btnColor,
}: NewsCardItemsType) => {
  return (
    <div className="flex justify-between items-center relative w-full">
      <div
        style={{ backgroundColor: bgColor }}
        className="rounded-bl-xl rounded-t-xl w-full h-[120px] md:h-[200px] p-3 md:p-5 flex items-end gap-x-5"
      >
        <img src={img} className="object-cover h-full" />
        <div className="flex flex-col gap-y-2">
          <div />
          <p className="text-[#2B2B43] text-xs md:text-base">{text}</p>
          <p className="text-[]#2B2B43 text-[10px]">{date}</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-12 h-full gap-y-2">
        <div className="ml-1 relative bg-[#E6E6FA] h-8 w-8 flex items-center justify-center z-50 rounded-lg">
          <button
            style={{ backgroundColor: btnColor }}
            className="rounded-full w-8 h-8"
          >
            <Icon
              icon="uil:arrow-up"
              color="white"
              className="rotate-45 m-auto"
            />
          </button>
        </div>
        <div
          style={{ backgroundColor: bgColor }}
          className="relative h-[80px] md:h-full w-full z-10 rounded-r-xl"
        >
          <div
            style={{ backgroundColor: bgColor }}
            className="absolute -top-10 left-0 h-10 w-10 after:absolute after:left-0 after:rounded-bl-xl after:h-10 after:w-10 after:bg-[#E6E6FA]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
