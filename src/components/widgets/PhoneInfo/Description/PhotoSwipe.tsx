/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useState } from 'react';

type Props = {
  images: string[];
};

export const PhotoSwipe: React.FC<Props> = ({ images }) => {
  const [selectImg, setSelectImg] = useState<string>(
    'src/components/widgets/PhoneInfo/assets/big-phone.svg',
  );

  return (
    <div className="flex justify-end sm:flex-row-reverse flex-col sm:resp-[gap-x/16/16] resp-[gap-y/27/0]">
      <div className="flex items-start grow-1 justify-center ">
        <img
          src={selectImg}
          alt={selectImg}
          className="object-contain resp-[width/442/275] resp-[height/442/275]"
        />
      </div>
      <div className="inline-flex sm:flex-col sm:justify-start sm:resp-[gap-y/8/8] resp-[gap-x/8/8] justify-center">
        {images.map(imgLink => (
          <button
            type="button"
            className={classNames(
              'border-[1px] border-elements dark:border-dark-surface-2 resp-[width/80/50] resp-[height/80/51]',
              {
                'border-[1px] border-primary dark:border-dark-surface-2 resp-[width/80/50] resp-[height/80/51]':
                  imgLink === selectImg,
              },
            )}
            onClick={() => setSelectImg(imgLink)}
          >
            <img
              src={imgLink}
              alt={'name'}
              className="mx-auto resp-[width/66/40] resp-[height/66/40]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
