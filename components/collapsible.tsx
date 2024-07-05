'use client'

import { ChevronRight, User } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { CollapsibleDetails } from "@/types/collapsible";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { Pencil } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "./ui/textarea";

const Collapsible = ({ details }: { details: CollapsibleDetails }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <>
        <div className="p-4">
            <div className="font-semibold flex items-center">
                <div className="mr-2 text-main bg-primary/10 rounded-full p-1">
                    <User size={16} />
                </div>
                {details.title}
            </div>
            <div className="mt-4">
                <div className="flex items-center cursor-pointer" onClick={() => setOpen(!open)}>
                    <ChevronRight size={18} className={open ? "mr-2 origin-center rotate-90" : "mr-2"} /> {details.mainQuestion}
                </div>
                {open ? <div className="px-4 mt-4">
                    <div className="uppercase mb-2 text-sm font-semibold text-second">How will this be scored?</div>
                    <Card className="text-sm">
                        <CardHeader className="p-2">
                            <div className="flex justify-between">
                                <div className="text-muted-foreground">{details.dialogQuestion} </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div className="rounded-sm cursor-pointer border text-[12px] text-primary bg-primary/10 font-semibold px-2 flex items-center"> <Pencil size={14} className='mr-1' /> Edit</div>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Edit Answer</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                <Textarea placeholder="Type your answer here." />
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Submit</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </CardHeader>
                        <CardContent className="p-2">{details.answer}</CardContent>
                    </Card>
                </div> : ""}
            </div>
        </div>
        <Separator />
    </>
}

export default Collapsible