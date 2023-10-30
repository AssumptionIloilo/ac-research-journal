import React, { FC } from 'react';
import { useAuth } from 'payload/components/utilities';
import { DefaultAccountIcon } from 'payload/dist/admin/components/graphics/Account/Default';

import { Media, User } from '../../../payload-types';

import './avatar.scss';

type AvatarType = {
  avatarProps: any;
};

/** For PayloadCMS Only. Displays the Avatar */
const Avatar: FC<AvatarType> = (props) => {
  const { user } = useAuth() as unknown as { user: User };

  const avatarImage = user?.avatarImage as Media;

  return (
    <div className="avatar-container">
      <span>{user?.name?.split(' ')?.[0]}</span>
      {avatarImage?.url ? (
        <div
          style={{
            backgroundImage: `url('${avatarImage.url}')`,
            backgroundSize: 'cover',
          }}
        />
      ) : (
        <DefaultAccountIcon active={true} />
      )}
    </div>
  );
};

export default Avatar;

export const makeAvatar = (props: AvatarType) => <Avatar avatarProps={props} />;
