export const CONTENT_TYPE_CLONE_BLACKLIST = new Set<string>([
  // Header & Footer
  'globalHeader',
  'localHeader',
  'globalFooter',
  'localFooter',
  // Seitentypen (Verhindert das Klonen verlinkter Unter- und Fremdseiten)
  'pageTypeContentPage',
  'pageTypeStorePage',
  'pageTypeEventPage',
  'pageTypeGlobalEventPage',
  'pageTypeNewsPage',
  'pageTypeGlobalNewsPage',
  'pageTypeGlobalHomePage',
  'pageTypeCooperativeHomePage',
  'pageTypePublishConfiguration',
  // Navigationsstrukturen
  'navigationEntryCooperative',
  'navigationEntryCooperativeGroup',
  'navigationEntryCooperativeStore',
  'navigationEntryPointCooperative',
  // Globale / standortbezogene Module
  'cooperativeLocation',
  'mapSearch',
  'location',
  'washingPlant',
  'carwashStation',
]);
