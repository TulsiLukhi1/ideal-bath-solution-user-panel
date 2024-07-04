import logo from "@/assets/images/logo.jpeg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="rounded-xl">
      <Image src={logo} width={120} className="border rounded" />
    </div>
  );
};

export default Logo;
