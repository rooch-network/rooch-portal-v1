import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ProfileInfo = () => {
  return (
    <div className="h-[85px] w-full">
      <div className="flex items-center justify-center">
        <Avatar>
          {/* TODO: add jazzicons */}
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Rooch Network"
          />
          <AvatarFallback>RH</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
