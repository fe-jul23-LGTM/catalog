import { FC } from 'react';
import { EPhoneColors, TColor } from '~types/EPhoneColors';

type TColorRadioProps = {
  colors: TColor[];
  selectedColor: string;
  onSelect: (color: EPhoneColors) => void;
};

export const ColorRadio: FC<TColorRadioProps> = ({
  colors,
  selectedColor,
  onSelect,
}) => {
  return (
    <div className={`flex flex-row resp-[gap/8/8]`}>
      {colors.map((color, index) => (
        <label key={index}>
          <input
            type="radio"
            name="color"
            value={color.code}
            checked={selectedColor === color.code}
            onChange={() => onSelect(color.name)}
            className="hidden"
          />
          <div
            className={`flex items-center justify-center resp-[width/32/32] resp-[height/32/32] rounded-full border-2  ${
              selectedColor === color.code
                ? 'border-black' + 'dark:border-dark-white'
                : 'border-elements dark:border-dark-elements ' +
                  'hover:border-icons dark:hover:border-dark-secondary'
            }`}
          >
            <div
              className={`resp-[width/24/24] resp-[height/24/24] rounded-full`}
              style={{
                backgroundColor: color.code,
              }}
            ></div>
          </div>
        </label>
      ))}
    </div>
  );
};
