export const COMPANY_INFO = {
  address: {
    postal: '〒160-0022',
    city: '東京都新宿区新宿5-11-25',
    building: 'アソルティ新宿五丁目ビル 201',
    mapUrl:
      'https://www.google.co.jp/maps/dir//%E3%80%92160-0022+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%96%B0%E5%AE%BF%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%95/...',
  },
  mail: 'info@mid-group.co',
  url: 'https://mid-group.co/',
  tel: '03-6869-7785',
  fax: '03-6730-2693',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/wansietokyo/',
  instagram: 'https://www.instagram.com/wansie_official/',
} as const;

export const IMAGE_SIZES = {
  CLIENT_LOGO: { width: 100, height: 100 },
  SERVICE_ITEM: { width: 800, height: 600 },
  NO_IMAGE: { width: 1200, height: 630 },
  SNS_TOP: { width: 154, height: 153 },
} as const;
