import NoDataImage from "@/assets/images/no-data.svg";
import Image from "next/image";

const NoData = ({ className, width = 50, height }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <Image src={NoDataImage} alt="loading" width={width} height={height} />
    </div>
  );
};

export default NoData;