'use client';

import { useLocale } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="rounded-lg border-gray-300 px-4 py-2 text-lg font-bold  text-gray-700 sm:text-sm"
    >
      {AppConfig.locales.map((elt) => (
        <option key={elt} value={elt}>
          {/* {elt.toUpperCase()} */}
          {elt === 'en' ? 'English' : 'ខ្មែរ'}
        </option>
      ))}
    </select>
  );
}
