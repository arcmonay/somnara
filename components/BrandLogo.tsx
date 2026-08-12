import Image from "next/image";

type BrandLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  width = 168,
  height = 97,
  priority = false,
  className = "",
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Somnara"
      width={width}
      height={height}
      priority={priority}
      className={`brand-logo ${className}`.trim()}
    />
  );
}
