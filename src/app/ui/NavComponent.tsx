"use client";

import Link from "next/link";
import { getTranslation } from "../utils/i18n";

type NavComponentProps = {
  locale: string;
};

export default function NavComponent({ locale }: NavComponentProps) {
  const t = getTranslation(locale);
  const categoryPath = t.category || "categorie";

  const menu = t.menu;
  const slugs = t.slugs;

  return (
    <nav className="navigation navigation-main nav-hov-a ">
      <ul id="menu-main-menu" className="menu font-interExtraBold">
        <li className="menu-item">
          <Link href={`/${locale}`} aria-current="page">{menu.home}</Link>
        </li>        

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.eco}`} className="">{menu.eco}</Link>
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.agro}`} className="font-interMedium">{menu.agro}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.tech}`}className="font-interMedium">{menu.tech}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.entreprises}`}className="font-interMedium">{menu.entreprises}</Link></li>

            <li><Link href={`/${locale}/${categoryPath}/${slugs.startups}`} className="font-interMedium">{menu.startups}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.fintech}`}className="font-interMedium">{menu.fintech}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.pme}`}className="font-interMedium">{menu.pme}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.entrepreneuriat}`} className="font-interMedium">{menu.entrepreneuriat}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.emploi}`}className="font-interMedium">{menu.emploi}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.agriculture}`}className="font-interMedium">{menu.agriculture}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.minesetenergie}`}className="font-interMedium">{menu.minesetenergie}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.iaeconomie}`}className="font-interMedium">{menu.iaeconomie}</Link></li>

          </ul>
        </li>

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.finance}`}>{menu.finance}</Link>
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.banques}`} className="font-interMedium">{menu.banques}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.assurances}`} className="font-interMedium">{menu.assurances}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.marches}`} className="font-interMedium">{menu.marches}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.investissement}`} className="font-interMedium">{menu.investissement}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.banquesetfinance}`} className="font-interMedium">{menu.banquesetfinance}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.brvm}`} className="font-interMedium">{menu.brvm}</Link></li>
          </ul>
        </li>

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.infra}`}>{menu.infra}</Link>
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.btp}`} className="font-interMedium">{menu.btp}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.transports}`} className="font-interMedium">{menu.transports}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.energie}`} className="font-interMedium">{menu.energie}</Link></li>
          </ul>
        </li>

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.decideurs}`}>{menu.decideurs}</Link>
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.succes}`} className="font-interMedium">{menu.succes}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.talents}`} className="font-interMedium">{menu.talents}</Link></li>
          </ul>
        </li>

        <li className="menu-item menu-item-has-children">
          <Link href={`/${locale}/${categoryPath}/${slugs.analyses}`}>{menu.analyses}</Link>
          <ul className="sub-menu">
            <li><Link href={`/${locale}/${categoryPath}/${slugs.tribune}`} className="font-interMedium">{menu.tribune}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.interview}`} className="font-interMedium">{menu.interview}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.opinions}`} className="font-interMedium">{menu.opinions}</Link></li>
            <li><Link href={`/${locale}/${categoryPath}/${slugs.decryptage}`} className="font-interMedium">{menu.decryptage}</Link></li>
          </ul>
        </li>


        <li className="menu-item">
          <Link href={`/${locale}/${categoryPath}/${slugs.international}`}>{menu.international}</Link>
        </li>
        <li className="menu-item">
          <Link href={`/${locale}/${categoryPath}/${slugs.pubreport}`}>{menu.pubreport}</Link>
        </li>
      </ul>
    </nav>
  );
}
