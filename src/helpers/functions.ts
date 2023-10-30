import { SITE_TITLE } from './constants';

export const handleTitleChange = (title: string) => {
  if (title) {
    document.title = `${SITE_TITLE} | ${title}`;
    localStorage.setItem('pageTitle', title);

    return;
  }

  document.title = SITE_TITLE;
  localStorage.removeItem('pageTitle');
};
