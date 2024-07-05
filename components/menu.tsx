import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Files, LayoutDashboard, PieChart, House } from "lucide-react";
import AvatarSet from "./avatar";

const Menu = () => {
    return <Card className="col-span-2 flex flex-col">
        <CardHeader className="uppercase text-lg text-center text-main hover:text-[#4319ff]/90 font-bold">
            <CardTitle className="font-semibold">Orca AI</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-2 pt-4 text-second">
            <div className="p-4 flex justify-start items-center hover:text-muted-foreground cursor-pointer"> <House size={20} className='mr-2' /> Homes</div>
            <div className="p-4 flex justify-start items-center hover:text-muted-foreground cursor-pointer"> <LayoutDashboard size={20} className='mr-2' />Templates</div>
            <div className="p-4 flex justify-start items-center hover:text-muted-foreground cursor-pointer"><Files size={20} className='mr-2' /> Reports</div>
            <div className="p-4 flex justify-start items-center hover:text-muted-foreground cursor-pointer"> <PieChart size={20} className="mr-2" /> Sales Performance</div>
        </CardContent>
        <CardFooter className="justify-self-end">
            <AvatarSet type='details' user={{ name: 'Adela Parkson', position: 'Manager' }} />
        </CardFooter>
    </Card>
}

export default Menu