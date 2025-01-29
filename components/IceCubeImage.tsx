// Place your SVG code here
export default function IceCubeImage() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-300 stroke-blue-400">
      {/* Paste your SVG content here */}
      <path
        d="M20,30 L80,30 L80,90 L20,90 Z"
        strokeWidth="2"
      />
      <path
        d="M20,30 L35,15 L95,15 L80,30 Z"
        strokeWidth="2"
        className="fill-blue-200"
      />
      <path
        d="M80,30 L95,15 L95,75 L80,90 Z"
        strokeWidth="2"
        className="fill-blue-400"
      />
    </svg>
  );
}