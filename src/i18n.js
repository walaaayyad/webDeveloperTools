// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          heroSmallTitle: 'Essential Free Tools for Web Developers',
          heroTitle: 'Design Better. Develop Faster.<br/> Show Your Work Like a Pro.',
          heroparagraph: 'Unlock a curated set of free tools built for modern web developers and designers. From layout optimization and mobile simulation to screenshot sharing and UI previews. These tools help you speed up your workflow, improve your designs, and present your work professionally to clients.'
        },
      },
      ar: {
        translation: {
          heroSmallTitle: 'أفضل الأدوات المجانية لمطوري الويب',
          heroTitle: 'صمّم باحتراف. طوّر بسرعة <br/> اعرض عملك كالمحترفين',
          heroparagraph: 'اكتشف مجموعة مختارة من الأدوات المجانية المصممة لمطوري ومصممي الويب العصريين. من تحسين التنسيق ومحاكاة الأجهزة إلى مشاركة لقطات الشاشة ومعاينات واجهات المستخدم — هذه الأدوات تساعدك على تسريع سير العمل، تحسين التصميمات، وتقديم عملك باحترافية للعملاء'
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
