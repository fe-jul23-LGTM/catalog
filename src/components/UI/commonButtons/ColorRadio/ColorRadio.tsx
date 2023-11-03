import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type TColorRadioProps = {
  colors: string[];
  selectedColor?: string;
  children?: ReactNode;
  handleColorChange: (value: string) => string;
};

export const ColorRadio: FC<TColorRadioProps> = ({
  colors,
  selectedColor,
  children,
  handleColorChange,
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
            className="hidden"
          />
          <div
            className={`flex items-center justify-center resp-[width/32/32] resp-[height/32/32] rounded-full border-2  ${
              selectedColor === color
                ? 'border-black' + 'dark:border-dark-white'
                : 'border-elements dark:border-dark-elements '
                  + 'hover:border-icons dark:hover:border-dark-secondary'
            }`}
          >
            <Link
              to={`/phones/${handleColorChange(color)}`}
              className={`resp-[width/24/24] resp-[height/24/24] rounded-full`}
              style={{
                backgroundColor: color,
              }}
            >
              {' '}
              {children}{' '}
            </Link>
          </div>
        </label>
      ))}
    </div>
  );
};
