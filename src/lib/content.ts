import type { HomeContent } from "@/content/en/home";
import type { AuxiliaryPagesContent } from "@/content/en/auxiliary-pages";
import type { CompanyContent } from "@/content/en/company";
import type { ContactContent } from "@/content/en/contact";
import type { LibraryContent } from "@/content/en/library";
import type { PlatformContent } from "@/content/en/platform";
import type { ProductContent } from "@/content/zh/products";
import type { TechnologyContent } from "@/content/en/technology";
import type { Locale } from "./i18n";

export async function getHomeContent(locale: Locale): Promise<HomeContent> {
  const content = await import(`@/content/${locale}/home`);
  return content.default as HomeContent;
}

export async function getHomepageContent(locale: Locale) {
  const content = await import(`@/content/${locale}/homepage`);
  return content.homepageContent;
}

export async function getTechnologyContent(
  locale: Locale,
): Promise<TechnologyContent> {
  const content = await import(`@/content/${locale}/technology`);
  return content.technologyContent as TechnologyContent;
}

export async function getPlatformContent(
  locale: Locale,
): Promise<PlatformContent> {
  const content = await import(`@/content/${locale}/platform`);
  return content.platformContent as PlatformContent;
}

export async function getLibraryContent(
  locale: Locale,
): Promise<LibraryContent> {
  const content = await import(`@/content/${locale}/library`);
  return content.libraryContent as LibraryContent;
}

export async function getProductsContent(
  locale: Locale,
): Promise<ProductContent> {
  const content = await import(`@/content/${locale}/products`);
  return content.default as ProductContent;
}

export async function getCompanyContent(
  locale: Locale,
): Promise<CompanyContent> {
  const content = await import(`@/content/${locale}/company`);
  return content.companyContent as CompanyContent;
}

export async function getContactContent(
  locale: Locale,
): Promise<ContactContent> {
  const content = await import(`@/content/${locale}/contact`);
  return content.contactContent as ContactContent;
}

export async function getAuxiliaryPagesContent(
  locale: Locale,
): Promise<AuxiliaryPagesContent> {
  const content = await import(`@/content/${locale}/auxiliary-pages`);
  return content.auxiliaryPagesContent as AuxiliaryPagesContent;
}

export async function getLegacyTranslations(
  locale: Locale,
): Promise<Record<string, string>> {
  const content = await import(`@/content/${locale}/legacy-translations`);
  return content.legacyTranslations as Record<string, string>;
}
