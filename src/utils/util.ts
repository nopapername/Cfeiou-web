import _compact from 'lodash/compact';
export function initRem(): void {
  // 4k适配
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    let deviceWidth = docEle.clientWidth || window.innerWidth;
    if (deviceWidth <= 320) {
      deviceWidth = 320;
    }
    const fontSize = deviceWidth / 1920;
    docEle.style.fontSize = 16 * Math.min(fontSize, 4) + 'px';
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize);
}

export const setTitle = (...args: string[]) => {
  const title = _compact(args).join('_');

  setTimeout(() => {
    document.title = title;
  });
};
