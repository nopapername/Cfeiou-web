import _compact from 'lodash/compact';
export function initRem(
  isMinScreen: boolean,
  setIsMinScreen: React.Dispatch<React.SetStateAction<boolean>>
): void {
  // 4k适配
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    try {
      let deviceWidth = docEle.clientWidth || window.innerWidth;
      if (deviceWidth <= 1138) {
        deviceWidth = 1138;
        setIsMinScreen(true);
      } else if (deviceWidth > 1138 && isMinScreen) {
        setIsMinScreen(false);
      }
      const fontSize = deviceWidth / 1920;
      docEle.style.fontSize = 16 * Math.min(fontSize, 4) + 'px';
    } catch (error) {
      console.error(error);
    }
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
