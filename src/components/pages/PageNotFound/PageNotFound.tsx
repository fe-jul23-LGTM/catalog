/* eslint-disable max-len */
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound:FC = () => {
  return (
    <>
      <div className="position-relative flex flex-col items-center justify-center min-h-screen">
        <iframe
          src="https://giphy.com/embed/4Hx5nJBfi8FzFWxztb"
          width="100%"
          height="100%"
          className="giphy-embed position-absolute"
          allowFullScreen
        ></iframe>
        <p className="pt-4 text-7xl dark:text-dark-secondary">
          404
        </p>
        <p className="resp-[w-max/300/300] text-center p-4 dark:text-dark-secondary">
          We are sorry, but we can't land on the page you are asking for. Please
          click on the button below to go back to the Home page.
        </p>
        <Link
          to="/"
          className="button-add resp-[w-max/300/300] p-5 flex justify-center"
        >
          Go back to the Home page
        </Link>
      </div>
    </>
  );
};
