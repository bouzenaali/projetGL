"use client";
import { Button } from "@/components/ui/button";
import { navBarLinks } from "@/lib/data/NavBarLinks";
import { toggleBurgerMenu } from "@/store/features/layout/burgerMenuSlice";
import { useParams, usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiLogout } from "react-icons/ci";

const BurgerMenu = () => {
  const { lawyer_account } = useParams();

  let path = usePathname();
  // delete the language from the path
  path = path.includes("/ar") ? path.replace("/ar", "/") : path.includes("/fr") ? path.replace("/fr", "/") : path;
  // remove consucetive slashes
  path = path.replace(/\/{2,}/g, "/");
  const dispatch = useDispatch();
  const { isShown } = useSelector((store) => store.burgerMenu);
  // check when clicking outside the sidebar
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("overlay") && isShown) {
      dispatch(toggleBurgerMenu());
    }
  };
  const { i18n, t } = useTranslation();
  const lng = i18n.language;
  return (
    <div
      onClick={handleOutsideClick}
      className={`overlay top-0 left-0 flex  ${lng == "ar" && "justify-end"}   fixed w-screen h-screen   ${isShown ? "bg-black/60 z-50" : " z-[-4]"} duration-1000  `}
    >
      {/* this is the sidebar content */}
      <aside className={` h-full w-2/3 bg-white p-5 duration-300  ${!isShown ? " invisible opacity-0 " : " visible opacity-100"} ${lng == "ar" && "items-end"} flex flex-col gap-6  `}>
        <Image
          width={150}
          height={50}
          alt="logo"
          src="/logo.png"
        />
        {lawyer_account && (
          <Link
            className=""
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
        <ul className="  flex flex-col gap-2">
          {navBarLinks.map((link, index) => {
            const isActive = path == link.basePath;
            return (
              <li key={index}>
                <Button
                  key={index}
                  variant={isActive ? "activeNavLink" : path == "/" ? "homeNonActiveNavLink" : "laywersNonActiveNavLink"}
                  href={link.basePath + link.query}
                  size={"sm"}
                >
                  <Link href={link.basePath + link.query}>{t(link?.text.toLowerCase())}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
        {/* this is the button */}
        {path == "/" && (
          <Button
            className={"w-fit "}
            variant={"primary"}
          >
            <Link href={""}>{t("iAmLawyer")}</Link>
          </Button>
        )}
        {path == "/lawyers" && (
          <ul className="flex flex-col w-fit  gap-5">
            <Button
              variant={"primary"}
              className={"w-full flex items-center justify-center"}
            >
              <Link href={""}>{t("login")}</Link>
            </Button>
            <Button
              variant="outline"
              className={"w-full flex items-center justify-center"}
            >
              <Link href={""}>{t("register")}</Link>
            </Button>
          </ul>
        )}
        {lawyer_account && (
          <Button
            className={""}
            variant={"primary"}
          >
            <CiLogout size={18} />
          </Button>
        )}
      </aside>
    </div>
  );
};
export default BurgerMenu;
