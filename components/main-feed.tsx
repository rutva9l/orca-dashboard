import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Collapsible from "@/components/collapsible";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, ChevronRight } from "lucide-react";

const MainFeed = () => {
    return <div className="col-span-6">
        <div className="flex items-center cursor-pointer">
            <div className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full flex items-center mr-4"><ArrowLeft size={14} className="mr-1" />Back</div>
            <div className="text-sm text-muted-foreground">Templates/Sales Effectiveness/BANT</div>
        </div>
        <div className='text-xl font-semibold text-main my-4'>Analyse the calls for Soft Skills Coaching</div>
        <div className="py-4">
            <div className="flex items-center font-semibold mb-2"><ChevronRight size={18} className={"mr-2 origin-center rotate-90"} />How does it work?</div>
            <div className="flex items-center font-semibold mb-2"><ChevronRight size={18} className={"mr-2 origin-center rotate-90"} />When should you use this?</div>
        </div>
        <Card>
            <CardContent className="p-4 text-main">
                <Tabs defaultValue="setup">
                    <TabsList className="bg-inherit">
                        <TabsTrigger value="setup">Setup</TabsTrigger>
                        <TabsTrigger value="sample">Sample Output</TabsTrigger>
                    </TabsList>
                    <TabsContent value="setup">
                        <Card>
                            <CardContent className="p-0 text-main">
                                <Collapsible details={{ title: "Call Opening", mainQuestion: 'Was the purpose of the call stated in the beginning?', dialogQuestion: 'What is the purpose of the call stated in the beginning?', answer: 'Did the PST member greet the customer and use the call opening with good energetic tone? Did the PST member use the right salutation and greeting on the email?' }} />
                                <Collapsible details={{ title: "Greeting", mainQuestion: 'Did the salesperson use an appropriate opening greeting?', dialogQuestion: 'What is the purpose of the call stated in the beginning?', answer: 'Did the PST member greet the customer and use the call opening with good energetic tone? Did the PST member use the right salutation and greeting on the email?' }} />
                                <Collapsible details={{ title: "Call Closing", mainQuestion: 'Did the salesperson summarize the key points discussed during the call?', dialogQuestion: 'What is the purpose of the call stated in the beginning?', answer: 'Did the PST member greet the customer and use the call opening with good energetic tone? Did the PST member use the right salutation and greeting on the email?' }} />
                                <Collapsible details={{ title: "Confidence", mainQuestion: 'Did the salesperson appear confident and knowledgeable about the product?', dialogQuestion: 'What is the purpose of the call stated in the beginning?', answer: 'Did the PST member greet the customer and use the call opening with good energetic tone? Did the PST member use the right salutation and greeting on the email?' }} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="sample">Sample Output panel</TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
}

export default MainFeed