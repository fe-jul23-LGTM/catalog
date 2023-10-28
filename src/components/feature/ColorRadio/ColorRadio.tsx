import { FC } from 'react';

type TColorRadioProps = {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
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
            value={color}
            checked={selectedColor === color}
            onChange={() => onSelect(color)}
            className="hidden"
          />
          <div className={`flex items-center justify-center resp-[w/32/32] resp-[h/32/32] rounded-full border-2  ${
            selectedColor === color
              ? 'border-black'
                + 'dark:border-dark-white'
              : 'border-elements dark:border-dark-elements '
                + 'hover:border-icons dark:hover:border-dark-secondary'
          }`}>
            <div
              className={`w-6 h-6 rounded-full`}
              style={{
                backgroundColor: color,
              }}
            ></div>
          </div>
        </label>
      ))}
    </div>
  );
};
