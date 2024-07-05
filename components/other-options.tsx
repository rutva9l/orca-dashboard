import { Input } from "@/components/ui/input";
import {  Bell, Moon, Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import AvatarSet from "@/components/avatar";
  import { Button } from "@/components/ui/button";

const OtherOptions = () => {
    return <div className="col-span-3">
    <div className="flex justify-between items-center border rounded-full mb-10 p-2">
      <div className="flex"><Input className="rounded-full bg-muted" placeholder={"Search..."} /></div>
      <Bell className="cursor-pointer" size={18} />
      <Moon className="cursor-pointer" size={18} />
      <Info className="cursor-pointer" size={18} />
      <AvatarSet type='collapsed' user={{ name: 'Adela Parkson', position: 'Manager' }} />
    </div>
    <Card className="mb-8">
      <CardContent className="text-main p-4">
        <div>
          <div className="font-semibold">Upload videos, audio or transcripts</div>
          <div className="p-4">
            <div className="bg-muted w-full rounded-sm px-8 py-4 mb-4 text-muted-foreground text-sm flex items-center justify-start"><img className="w-[30px] h-[30px] object-cover mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cPiiBjAeOParQoWl8fOkW7C_ymO6IWjIYg&s" alt="" /> Upload files from drive</div>
            <div className="bg-muted w-full rounded-sm px-8 py-4 mb-4 text-muted-foreground text-sm flex items-center justify-start"> <img className="w-[30px] h-[20px] object-cover mr-4" src="https://cdnstorage.sendbig.com/images/page-image.jpg19bff224-1476-4041-ab62-8f616b0dd9ff.jpg" alt="" />Upload files from this computer</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">Data Integrations</div>
          <div className="flex justify-between items-center p-4">
            <div className="flex font-semibold text-lg items-center"><img className="w-[50px] h-[50px] object-cover mr-2" src="https://logowik.com/content/uploads/images/hubspot5453.logowik.com.webp" alt="" /> HubSpot</div>
            <Badge className="text-muted-foreground" variant="secondary">CRM</Badge>
          </div>
          <div className="px-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Some data integration I have to ask about
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Some data integration
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Button className="w-full">Generate Report</Button>
  </div>
}

export default OtherOptions