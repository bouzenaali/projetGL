"use client";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { useParams, usePathname } from "next/navigation";
import { navBarLinks } from "@/lib/data/NavBarLinks";
import Link from "next/link";
import { basePath } from "../../../next.config";
import BurgerMenu from "./BurgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "@/store/features/layout/burgerMenuSlice";
import { useTranslation } from "react-i18next";
import LanguagesDropDown from "./LanguagesDropDown";
import { CiLogout } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const NavBar = () => {
  const { lawyer_account } = useParams();
  let path = usePathname();
  // delete the language from the path
  path = path.includes("/ar") ? path.replace("/ar", "/") : path.includes("/fr") ? path.replace("/fr", "/") : path;
  // remove consucetive slashes
  path = path.replace(/\/{2,}/g, "/");
  const params = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <header className=" header-shadow pb-5 w-full flex items-center justify-between pt-5 ">
      <div className="container w-full flex items-center justify-between">
        <Logo />
        {/* those are the links */}
        <ul className=" items-center hidden md:flex gap-2">
          {navBarLinks.map((link, index) => {
            // remove the ar or fr from the path

            //  the path is including the ar or fr , check if it exists and remove it from the path

            const isActive = path == link.basePath;
            // check if the current path is active due to a nested route
            const isNestedActive = path.includes(link.basePath) && link.basePath != "/";
            return (
              <li key={index}>
                <Button
                  key={index}
                  variant={isActive || isNestedActive ? "activeNavLink" : basePath == "/" ? "homeNonActiveNavLink" : "laywersNonActiveNavLink"}
                  href={link.basePath + link.query}
                  size={"sm"}
                >
                  <Link href={link.basePath + link.query}>{t(link.text.toLowerCase())}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
        {/* this is the language button */}
        <div
          className="
          flex items-center gap-3"
        >
          {/* those are the actions buttons */}
          <LanguagesDropDown />

          {path == "/" || path.includes("/auth") ? (
            <Button
              variant={"primary"}
              className={"hidden md:block"}
            >
              <Link href={"/auth/lawyer-register"}>{t("iAmLawyer")}</Link>
            </Button>
          ) : (
            ""
          )}
          {path.includes("/lawyers") && (
            <>
              <Button
                variant={"primary"}
                className={"hidden md:block"}
              >
                <Link href={"/auth/login"}>{t("login")}</Link>
              </Button>
              <Button
                variant="outline"
                className={"hidden md:block"}
              >
                <Link href={"/auth/client-register"}>{t("register")}</Link>
              </Button>
            </>
          )}
          {/* if the user is Logged in */}
          {lawyer_account && (
            <Button
              className={"hidden md:block"}
              variant={"primary"}
            >
              <CiLogout size={18} />
            </Button>
          )}
          {lawyer_account && (
            <Link
              className="hidden md:block"
              href={`/${lawyer_account}/infos`}
            >
              <Avatar>
                <AvatarImage
                  src="/placeholder.png"
                  alt="@shadcn"
                />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Link>
          )}
          <Button
            onClick={() => {
              dispatch(toggleBurgerMenu());
            }}
            className={"block md:hidden h-[40px]"}
            variant={"primary"}
          >
            <GiHamburgerMenu />
          </Button>
        </div>
        {/* this is the burger menu button */}
      </div>
      {/* this is the burger menu */}
      <BurgerMenu />
    </header>
  );
};
export default NavBar;
