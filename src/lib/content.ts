import type {
  AuxiliaryPagesContent,
  CompanyContent,
  ContactContent,
  HomeContent,
  HomepageContent,
  LibraryContent,
  PlatformContent,
  ProductContent,
  TechnologyContent,
} from "./content-types";
import type { DemoContent } from "@/content/zh/demo";
import type { Locale } from "./i18n";

interface ContentLoaders {
  home: () => Promise<HomeContent>;
  homepage: () => Promise<HomepageContent>;
  technology: () => Promise<TechnologyContent>;
  platform: () => Promise<PlatformContent>;
  library: () => Promise<LibraryContent>;
  products: () => Promise<ProductContent>;
  company: () => Promise<CompanyContent>;
  contact: () => Promise<ContactContent>;
  auxiliaryPages: () => Promise<AuxiliaryPagesContent>;
  demo: () => Promise<DemoContent>;
}

const contentLoaders = {
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
} satisfies Record<Locale, ContentLoaders>;

export function getHomeContent(locale: Locale): Promise<HomeContent> {
  return contentLoaders[locale].home();
}

export function getHomepageContent(
  locale: Locale,
): Promise<HomepageContent> {
  return contentLoaders[locale].homepage();
}

export function getTechnologyContent(
  locale: Locale,
): Promise<TechnologyContent> {
  return contentLoaders[locale].technology();
}

export function getPlatformContent(locale: Locale): Promise<PlatformContent> {
  return contentLoaders[locale].platform();
}

export function getLibraryContent(locale: Locale): Promise<LibraryContent> {
  return contentLoaders[locale].library();
}

export function getProductsContent(locale: Locale): Promise<ProductContent> {
  return contentLoaders[locale].products();
}

export function getCompanyContent(locale: Locale): Promise<CompanyContent> {
  return contentLoaders[locale].company();
}

export function getContactContent(locale: Locale): Promise<ContactContent> {
  return contentLoaders[locale].contact();
}

export function getAuxiliaryPagesContent(
  locale: Locale,
): Promise<AuxiliaryPagesContent> {
  return contentLoaders[locale].auxiliaryPages();
}

export function getDemoContent(locale: Locale): Promise<DemoContent> {
  return contentLoaders[locale].demo();
}
