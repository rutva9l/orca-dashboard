import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/types/user"

const AvatarSet = ({type, user}: {type:string, user: User}) => {
    return <>
    {type == 'details' ?  <div className={"flex items-center cursor-pointer"}>
                        <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full mr-4 h-10 w-10"}>
                            <AvatarImage className="aspect-square h-full w-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="text-main">{user.name}</div>
                            <div className="text-second text-sm">{user.position}</div>
                        </div>
                    </div> : <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"}>
                            <AvatarImage className="aspect-square h-full w-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
                        </Avatar>}
    </>
}

export default AvatarSet