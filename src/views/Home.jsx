import { Button } from "@nextui-org/react";
import { Cards } from "../components/Cards";
import { Plus } from "lucide-react";




export function Home(){
    return(
    <>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                Mis historias
        </h2>
        <div className="flex space-x-4 justify-center sm:mx-auto fpx-6 py-12 lg:px-8">
            <Cards/>
        </div>
        <div className="flex justify-end pr-6">
            <Button className="rounded-full" color="warning" size="lg">
                <Plus/>
            </Button>
        </div>
    </>
    )
}