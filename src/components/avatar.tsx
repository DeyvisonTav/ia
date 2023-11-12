interface AvatarProps {
  src: string;
}
export function AvatarComponent({ src }: AvatarProps) {
  return (
    <div>
      <img src={src} alt="" className="w-10 h-10 rounded-full" />
    </div>
  );
}
