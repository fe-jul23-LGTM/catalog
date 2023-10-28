import { FC, ReactElement, cloneElement } from 'react';
import classNames from 'classnames';

type TIconButtonProps = {
  disabled: boolean;
  onClick: () => void;
  svg: ReactElement;
};

export const IconButton: FC<TIconButtonProps> = ({
  disabled,
  onClick,
  svg,
}) => {
  const generalStyles = classNames(
    `resp-[width/32/32] resp-[height/32/32]
    flex items-center justify-center
    border
    dark:text-gray-white    
    ${disabled
    ? 'bg-none border-elements dark:border-dark-elements'
    : 'bg-white border-icons dark:border-none dark:bg-dark-elements '
      + 'hover:border-primary hover:text-gray-white '
      + 'dark:hover:bg-dark-icons'}`,
  );

  const svgStyles = classNames(
    `resp-[width/16/16] resp-[height/16/16]
    ${disabled
    ? 'dark:fill-dark-icons fill-icons'
    : 'dark:fill-dark-white fill-black'}`,
  );

  return (
    <button className={generalStyles} onClick={onClick} disabled={disabled}>
      {cloneElement(svg, {
        children: cloneElement(svg.props.children, {
          className: classNames(
            svg.props.children.props.className,
            svgStyles,
          ),
        }),
      })}
    </button>
  );
};
