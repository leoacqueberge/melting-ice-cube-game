import Image from 'next/image';

export default function IceCubeImage() {
  return (
    <Image
      src="/components/icecube.svg"
      alt="Ice Cube"
      width={128}
      height={128}
      className="w-full h-full"
      priority
    />
  );
}