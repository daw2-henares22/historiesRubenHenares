import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";

export function Cards({historia}){
  const { historias, setDataHistoria } = useContext(GlobalContext);

  const controladorEditarHistoria = () => {
    setDataHistoria(historia);
  };

  if (!historias || historias.length === 0) {
    return <div>No hay historias disponibles.</div>;
  }

    return(
    <>
    {historias.map((historia, index)=>(
    <Card key={index} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{historia.titulo}</p>
        <h4 className="text-white/90 font-medium text-xl">{historia.fecha}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={historia.imagen}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{historia.comentario}</p>
          </div>
        </div>
        <Button onClick={controladorEditarHistoria} className="text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil />
        </Button>
        <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
    ))}
  </>
    )
}