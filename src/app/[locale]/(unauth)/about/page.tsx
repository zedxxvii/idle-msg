// import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  // const t = useTranslations('About');

  return (
    <>
      {/* <p>{t('about_paragraph')}</p> */}
      <p>CumCum</p>

      <p>Idle Monster Saga</p>
    </>
  );
}
