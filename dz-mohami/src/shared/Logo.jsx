"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Logo = ({ variant }) => {
  let path = usePathname();
  // remove the ar of fr from the path and the double slash
  if (path.includes("/ar")) {
    path = path.replace("/ar", "/");
  }
  if (path.includes("/fr")) {
    path = path.replace("/fr", "/");
  }
  if (path.includes("//")) {
    path = path.replace("//", "/");
  }

  if ((path == "/" || path.includes("/auth")) && variant != "black") {
    return (
      <Link href={"/"}>
        <Image
          width={150}
          height={50}
          alt="logo"
          src="/white_logo.png"
        />
      </Link>
    );
  }
  return (
    <Link href={"/"}>
      <Image
        width={150}
        height={50}
        alt="logo"
        src="/logo.png"
      />
    </Link>
  );
};
export default Logo;
