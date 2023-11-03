/* eslint-disable max-len */
import { FC } from 'react';
import { IDescription } from '~types/IPhoneDetailed';

type TDescriptionProps = {
  description: IDescription[];
};

export const Description: FC<TDescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col resp-[gap/32/32]">
      {description.map((desc, index) => (
        <div key={index} className="space-y-2 md:space-y-4">
          <div className="title-3 resp-[mb/16/16]">{desc.title}</div>
          <div className="text-gray-600">{desc.text}</div>
        </div>
      ))}
    </div>
  );
};
