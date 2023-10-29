import { SITE_TITLE } from './constants';

export const handleTitleChange = (title: string) => {
  if (title) {
    document.title = `${SITE_TITLE} | ${title}`;

    return;
  }

  document.title = SITE_TITLE;
};
