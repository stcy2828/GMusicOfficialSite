
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { InfoItem } from './types';
import { INFO_DATA_EN, INFO_DATA_TC, INFO_DATA_JP } from './InfoData';
import { LanguageType } from './constants/translations';

export const LOGO_URL = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/Gmusic-logo-01.png?raw=true";

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/GMusichkltd' },
  { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/gmusichk' },
];

export const NAV_LINKS = [
  { name: 'TOP', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'OUR BRAND', path: '/brand' },
  { name: 'EVENT', path: '/event' },
  { name: 'CONTACT US', path: '/contact' },
];

const generatePosters = () => {
  const posters = [];

  // 2026 Posters: 01 to 05
  for (let i = 1; i <= 5; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2026-${num}`,
      year: 2026,
      name: `2026-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2026/2026-${num}.webp?raw=true`
    });
  }
  
  // 2025 Posters: 01 to 16
  for (let i = 1; i <= 16; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2025-${num}`,
      year: 2025,
      name: `2025-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2025/2025-${num}.webp?raw=true`
    });
  }

  // 2024 Posters: 01 to 10
  for (let i = 1; i <= 10; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2024-${num}`,
      year: 2024,
      name: `2024-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2024/2024-${num}.webp?raw=true`
    });
  }

  // 2023 Posters: 01 to 11
  for (let i = 1; i <= 11; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2023-${num}`,
      year: 2023,
      name: `2023-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2023/2023-${num}.webp?raw=true`
    });
  }

    // 2022 Posters: 01 to 02
  for (let i = 1; i <= 2; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2022-${num}`,
      year: 2022,
      name: `2022-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2022/2022-${num}.webp?raw=true`
    });
  }

      // 2021 Posters: 01 to 03
  for (let i = 1; i <= 3; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2021-${num}`,
      year: 2021,
      name: `2021-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2021/2021-${num}.webp?raw=true`
    });
  }

      // 2020 Posters: 01 to 01
  for (let i = 1; i <= 1; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2020-${num}`,
      year: 2020,
      name: `2020-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2020/2020-${num}.webp?raw=true`
    });
  }

      // 2019 Posters: 01 to 05
  for (let i = 1; i <= 5; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2019-${num}`,
      year: 2019,
      name: `2019-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2019/2019-${num}.webp?raw=true`
    });
  }

      // 2018 Posters: 01 to 10
  for (let i = 1; i <= 10; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2018-${num}`,
      year: 2018,
      name: `2018-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2018/2018-${num}.webp?raw=true`
    });
  }

      // 2017 Posters: 01 to 05
  for (let i = 1; i <= 5; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2017-${num}`,
      year: 2017,
      name: `2017-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2017/2017-${num}.webp?raw=true`
    });
  }

      // 2016 Posters: 01 to 08
  for (let i = 1; i <= 8; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2016-${num}`,
      year: 2016,
      name: `2016-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2016/2016-${num}.webp?raw=true`
    });
  }

      // 2015 Posters: 01 to 07
  for (let i = 1; i <= 7; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2015-${num}`,
      year: 2015,
      name: `2015-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2015/2015-${num}.webp?raw=true`
    });
  }

      // 2014 Posters: 01 to 06
  for (let i = 1; i <= 6; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2014-${num}`,
      year: 2014,
      name: `2014-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2014/2014-${num}.webp?raw=true`
    });
  }

      // 2013 Posters: 01 to 07
  for (let i = 1; i <= 7; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2013-${num}`,
      year: 2013,
      name: `2013-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2013/2013-${num}.webp?raw=true`
    });
  }

        // 2012 Posters: 01 to 07
  for (let i = 1; i <= 7; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2012-${num}`,
      year: 2012,
      name: `2012-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2012/2012-${num}.webp?raw=true`
    });
  }

        // 2011 Posters: 01 to 05
  for (let i = 1; i <= 5; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2011-${num}`,
      year: 2011,
      name: `2011-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2011/2011-${num}.webp?raw=true`
    });
  }

      // 2010 Posters: 01 to 03
  for (let i = 1; i <= 3; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2010-${num}`,
      year: 2010,
      name: `2010-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2010/2010-${num}.webp?raw=true`
    });
  }

      // 2009 Posters: 01 to 05
  for (let i = 1; i <= 5; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2009-${num}`,
      year: 2009,
      name: `2009-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2009/2009-${num}.webp?raw=true`
    });
  }

      // 2008 Posters: 01 to 01
  for (let i = 1; i <= 1; i++) {
    const num = i.toString().padStart(2, '0');
    posters.push({
      id: `2008-${num}`,
      year: 2008,
      name: `2008-${num}`,
      imageUrl: `https://github.com/stcy2828/GMusicWebsite/blob/main/poster/2008/2008-${num}.webp?raw=true`
    });
  }

  return posters;
};

export const ALL_POSTERS = generatePosters();

// Only show 2025 posters in the top carousel as requested.
export const TOP_POSTERS = ALL_POSTERS
  .filter(p => p.year === 2025 || p.year === 2026)
  .sort(() => 0.5 - Math.random())
  .slice(0, 8);

// Sorted ascending by name to ensure 01 -> N order (fixing the reverse order issue)
export const EVENT_POSTERS = [...ALL_POSTERS].sort((a, b) => a.name.localeCompare(b.name));

export const STORAGE_KEY = 'gmusic_info_items';

// Restoring getStoredInfo to support admin panel
export const getStoredInfo = (lang: LanguageType = 'EN'): InfoItem[] => {
  if (typeof window === 'undefined') return INFO_DATA_EN;
  
  const key = `${STORAGE_KEY}_${lang}`;
  const defaultData = lang === 'TC' ? INFO_DATA_TC : lang === 'JP' ? INFO_DATA_JP : INFO_DATA_EN;
  
  const stored = localStorage.getItem(key);
  if (!stored) {
    // If no data in local storage, fall back to the static file data
    return defaultData;
  }
  
  try {
    const parsed = JSON.parse(stored);
    // Return parsed data if valid, otherwise fallback
    return Array.isArray(parsed) ? parsed : defaultData;
  } catch (e) {
    return defaultData;
  }
};

// Restoring saveInfo to support admin panel
export const saveInfo = (items: InfoItem[], lang: LanguageType = 'EN') => {
  if (typeof window !== 'undefined') {
    const key = `${STORAGE_KEY}_${lang}`;
    localStorage.setItem(key, JSON.stringify(items));
    window.dispatchEvent(new Event('info-update'));
  }
};

// Update getInfoItems to check storage first (allowing admin updates to take effect)
export const getInfoItems = (lang: LanguageType = 'EN'): InfoItem[] => {
  return getStoredInfo(lang);
};
