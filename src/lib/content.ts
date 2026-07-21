import type {
  AuxiliaryPagesContent,
  CompanyContent,
  ContactContent,
  DemoContent,
  HomeContent,
  HomepageContent,
  LibraryContent,
  PlatformContent,
  ProductContent,
  TechnologyContent,
} from "./content-types";
import type { Locale } from "./i18n";

interface ContentByPage {
  home: HomeContent;
  homepage: HomepageContent;
  technology: TechnologyContent;
  platform: PlatformContent;
  library: LibraryContent;
  products: ProductContent;
  company: CompanyContent;
  contact: ContactContent;
  auxiliaryPages: AuxiliaryPagesContent;
  demo: DemoContent;
}

export type ContentPage = keyof ContentByPage;

type ContentLoaders = {
  [Page in ContentPage]: () => Promise<ContentByPage[Page]>;
};

const contentLoaders: Record<Locale, ContentLoaders> = {
  zh: {
    home: async () => (await import("@/content/zh/home")).default,
    homepage: async () =>
      (await import("@/content/zh/homepage")).homepageContent,
    technology: async () =>
      (await import("@/content/zh/technology")).technologyContent,
    platform: async () =>
      (await import("@/content/zh/platform")).platformContent,
    library: async () => (await import("@/content/zh/library")).libraryContent,
    products: async () => (await import("@/content/zh/products")).default,
    company: async () => (await import("@/content/zh/company")).companyContent,
    contact: async () => (await import("@/content/zh/contact")).contactContent,
    auxiliaryPages: async () =>
      (await import("@/content/zh/auxiliary-pages")).auxiliaryPagesContent,
    demo: async () => (await import("@/content/zh/demo")).demoContent,
  },
  en: {
    home: async () => (await import("@/content/en/home")).default,
    homepage: async () =>
      (await import("@/content/en/homepage")).homepageContent,
    technology: async () =>
      (await import("@/content/en/technology")).technologyContent,
    platform: async () =>
      (await import("@/content/en/platform")).platformContent,
    library: async () => (await import("@/content/en/library")).libraryContent,
    products: async () => (await import("@/content/en/products")).default,
    company: async () => (await import("@/content/en/company")).companyContent,
    contact: async () => (await import("@/content/en/contact")).contactContent,
    auxiliaryPages: async () =>
      (await import("@/content/en/auxiliary-pages")).auxiliaryPagesContent,
    demo: async () => (await import("@/content/en/demo")).demoContent,
  },
};

export function loadContent<Page extends ContentPage>(
  locale: Locale,
  page: Page,
): Promise<ContentByPage[Page]> {
  const loader = contentLoaders[locale]?.[page];
  if (!loader) {
    throw new Error(`Content not found: ${locale}/${page}`);
  }

  return loader();
}

export function getHomeContent(locale: Locale): Promise<HomeContent> {
  return loadContent(locale, "home");
}

export function getHomepageContent(
  locale: Locale,
): Promise<HomepageContent> {
  return loadContent(locale, "homepage");
}

export function getTechnologyContent(
  locale: Locale,
): Promise<TechnologyContent> {
  return loadContent(locale, "technology");
}

export function getPlatformContent(locale: Locale): Promise<PlatformContent> {
  return loadContent(locale, "platform");
}

export function getLibraryContent(locale: Locale): Promise<LibraryContent> {
  return loadContent(locale, "library");
}

export function getProductsContent(locale: Locale): Promise<ProductContent> {
  return loadContent(locale, "products");
}

export function getCompanyContent(locale: Locale): Promise<CompanyContent> {
  return loadContent(locale, "company");
}

export function getContactContent(locale: Locale): Promise<ContactContent> {
  return loadContent(locale, "contact");
}

export function getAuxiliaryPagesContent(
  locale: Locale,
): Promise<AuxiliaryPagesContent> {
  return loadContent(locale, "auxiliaryPages");
}

export function getDemoContent(locale: Locale): Promise<DemoContent> {
  return loadContent(locale, "demo");
}
