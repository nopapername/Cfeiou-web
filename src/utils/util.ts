import _compact from 'lodash/compact';
import debounce from 'lodash/debounce';

/** 一般场景的防抖操作，先进行延时阻止，再进行操作 */
export const debounceFunLazyly = debounce((fn) => {
  fn && fn();
}, 300);
/** 表单页的防抖操作，先执行方法，再进行延时阻止 */
export const debounceFun = debounce(
  (fn) => {
    fn && fn();
  },
  500,
  { leading: true, trailing: false }
);

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
      } else {
        setIsMinScreen(false);
      }
      const fontSize = deviceWidth / 1920;
      docEle.style.fontSize = `${16 * Math.min(fontSize, 4)}px`;
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
  setHtmlFontSize();
  window.addEventListener('resize', debounce(setHtmlFontSize, 300));
}

export const setTitle = (...args: string[]) => {
  const title = _compact(args).join('_');

  setTimeout(() => {
    document.title = title;
  });
};
