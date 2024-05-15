import { Button } from "@nextui-org/react";
import { Cards } from "../components/Cards";
import { Plus } from "lucide-react";




export function Home(){
    return(
        <div className="flex justify-center sm:mx-auto fpx-6 py-12 lg:px-8">
            <Cards/>
            <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
                <Plus/>
            </Button>
        </div>
        
    )
}