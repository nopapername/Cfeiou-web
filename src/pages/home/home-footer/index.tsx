/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import classnames from 'classnames';
import styles from './index.less';

export default function HomeFooter() {
  return (
    <div className={styles['home-footer']}>
      <div className={styles['home-footer__bg']} />
      <div className={styles['home-footer__intro']}>
        <div className={styles['home-footer__intro-left']}>
          <img src={require('@/assets/footer/introduce_banner.jpg')} alt="intro_banner" />
        </div>
        <div className={styles['home-footer__intro-right']}>
          <div className={classnames(styles['home-footer__intro-right__title'], 'scroll-reveal-animation')}>
            <span>关于我们</span>
            <span>ABOUT US</span>
          </div>
          <div className={classnames(styles['home-footer__intro-right__intro'], 'scroll-reveal-animation')}>
            <div className={styles['home-footer__intro-right__intro-div']}>2021年，川飞欧成立于四川绵阳。受美好生活理念启发，川飞欧旨在为客户提供合理的设计方案建议，<br /> 并将具体功能与美学标准转化为精致的细节和人性化的考虑，创造一种舒适的、高品质的，能够促进居住者心态趋向平和的空间。
              <br /> 川飞欧，与你一起构建「更美好的生活」。
            </div>
            <div className={styles['home-footer__intro-right__intro-div']}>In 2021, Chuanfeiou was founded in Mianyang, Sichuan Province. Inspired by the concept of a better life, Chuanfeiou aims to provide customers with reasonable design suggestions, and transform specific functions and aesthetic standards into exquisite details and humanized considerations, creating a comfortable, high-quality space that can promote peace of mind of the occupants.
              Chuanfeiou,together with you to build a "better life".
            </div>
          </div>
          <div className={classnames(styles['home-footer__intro-right-bottom'], 'scroll-reveal-animation')}>
            <div>坐标绵阳·欢迎来访</div>
            <div>室内设计 | 全屋定制 | 商业空间设计 | 精装改造 | 旧居重装 | 精湛施工...</div>
            <div>
              <span className={styles['home-footer__intro-right__intro-strong']}>20</span>年装修设计经验，<span className={styles['home-footer__intro-right__intro-strong']}>600+</span>业主朋友的信赖之选。
            </div>
          </div>
        </div>
      </div>
      <div className={styles['home-footer__qa']}>
        <div className="scroll-reveal-animation">Q&A</div>
        <div className="scroll-reveal-animation">: 相比起大装修公司，选择我们的原因是？</div>
        <div className="scroll-reveal-animation">: 大装修公司运营成本太高，对于业主来说，装修的隐形成本就会增加许多。</div>
        <div className="scroll-reveal-animation">&nbsp;&nbsp;小装修公司一没有高昂的房租费，二没有那么多的人员开销，就性价比来说是很好的选择，且全程是设计师一对一的服务，相当于“私人订制”，回馈率高。</div>
      </div>
      <div className={styles['home-footer__info']}>
        <div className={styles['home-footer__info__desc']}>
          <div>MIAN YANG 绵阳 / CHENG DU 成都</div>
          <div>四川飞欧装饰工程有限公司</div>
          <div>绵阳市经开区绵州大道中段199号绵阳经开万达广场18栋10层16号</div>
          <div>联系电话: 13990166737<span>（微信同号）</span></div>
          <br />
          <div>*可承接绵阳、成都及周边城市、县、乡、镇等装修设计项目，欢迎随时咨询!</div>
        </div>
        <div className={styles['home-footer__info__follow']}>
          <div className={styles['home-footer__info__follow-header']}>
            <span>关注我们</span>
            <span>FOLLOW US</span>
          </div>
          <div className={styles['home-footer__info__follow-content']}>
            <div className={styles['home-footer__info__follow-content__account']}><img src={require('@/assets/footer/contact_us.jpg')} alt="contact_us" /><span>咨询了解</span></div>
            <div className={styles['home-footer__info__follow-content__divide']}>|</div>
            <div className={styles['home-footer__info__follow-content__account']}><img src={require('@/assets/footer/xiaohongshu_logo.png')} alt="contact_us" /><span>官方小红书</span></div>
            <div className={styles['home-footer__info__follow-content__divide']}>|</div>
            <div className={styles['home-footer__info__follow-content__account']}><img src={require('@/assets/footer/douyin_logo.png')} alt="contact_us" /><span>官方抖音</span></div>
            <div className={styles['home-footer__info__follow-content__divide']}>|</div>
            <div className={styles['home-footer__info__follow-content__account']}><img src={require('@/assets/footer/contact_us.jpg')} alt="contact_us" /><span>商务合作</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
