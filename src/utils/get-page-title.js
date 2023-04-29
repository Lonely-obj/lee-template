import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Lee Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}`
  }
  return `${title}`
}
