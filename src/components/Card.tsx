import Image from 'next/image';

import { CardItemsType } from 'data/data';

const Card = ({ icon, title, desc }: CardItemsType) => {
  return (
    <div className="bg-white rounded-lg w-full md:w-[320px] h-[340px] flex flex-col items-center justify-center gap-y-2 py-4 px-12 shadow shadow-gray-500/10">
      <Image src={icon} alt={title} width={100} height={100} />
      <h3 className="text-dark-800 text-[18px] font-semibold mt-4">{title}</h3>
      <p className="text-center font-light text-dark-300 text-[16px]">{desc}</p>
    </div>
  );
};

export default Card;
