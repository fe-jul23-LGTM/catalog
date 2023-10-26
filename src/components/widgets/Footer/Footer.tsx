/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '~components/UI/logo';

type TFooterProps = object;

export const Footer: FC<TFooterProps> = () => {
  return (
    <footer className="pt-[32px] mt-[32px] relative after:absolute after:left-0 after:right-0 after:top-0 after:h-[1.5px] after:bg-elements dark:after:bg-dark-elements">
      <div className="flex flex-col sm:flex-row sm:justify-between container-lg">
        <Logo />

        <nav className="pt-[32px] pb-[32px] sm:pt-0 sm:pb-0">
          <ul className="flex flex-col sm:flex-row sm:justify-between sm:resp-[gap-x/14/14] gap-y-[16px] sm:gap-y-0 sm-tablet:resp-[gap-x/110/110] font-extrabold resp-[font/12/12] resp-[line-height/11/12] dark:text-dark-white">
            <li className="uppercase">
              <a target="_blanc" href="https://github.com/fe-jul23-LGTM/">
                Github
              </a>
            </li>
            <li className="uppercase">
              <a href="#">Contacts</a>
            </li>
            <li className="uppercase">
              <a href="#">rights</a>
            </li>
          </ul>
        </nav>

        <div className="text-center">
          <Link className='font-semibold dark:text-dark-secondary' to="#">Back to top</Link>
        </div>
      </div>
    </footer>
  );
};
