import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";


export function ComponentCard({titulo, fecha, imagen, comentario}){
    return(
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{titulo}</p>
        <h4 className="text-white/90 font-medium text-xl">{fecha}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={imagen}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{comentario}</p>
          </div>
        </div>
        <Button className=" text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil/>
      </Button>
      <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
        <Trash2/>
      </Button>
      </CardFooter>
    </Card>
    )
}