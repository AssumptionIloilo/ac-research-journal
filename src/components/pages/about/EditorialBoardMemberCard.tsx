import { FC } from 'react';
import Image from 'next/image';

type EditorialBoardCardProps = {
  profileImageURL: string;
  name: string;
  subtitle: string;
};

const EditorialBoardMemberCard: FC<EditorialBoardCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[150px]">
      <Image
        alt=""
        src={props.profileImageURL}
        className="bg-primary-200 text-xs rounded-full w-24 h-24"
      />

      <div className="flex flex-col items-center">
        <p className="font-medium text-center text-sm">{props.name}</p>
        <p className="opacity-80 text-sm">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default EditorialBoardMemberCard;
