import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { ComponentCard } from "./Card";

export function ComponentCards(){
  const historias = [
    {
      titulo:"VIAJE A NEPAL",
      fecha:"Agosto de 2024",
      comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
      imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
    },
    {
      titulo:"VIAJE A NEPAL",
      fecha:"Agosto de 2024",
      comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
      imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
    },
    {
      titulo:"VIAJE A NEPAL",
      fecha:"Agosto de 2024",
      comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
      imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
    },
    {
      titulo:"VIAJE A NEPAL",
      fecha:"Agosto de 2024",
      comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
      imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
    },
    {
      titulo:"VIAJE A NEPAL",
      fecha:"Agosto de 2024",
      comentario:"Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...",
      imagen:"https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
    }
  ]
    return(
    <>
    {historias.slice().map((historia, index) => (
      <ComponentCard
      key={index}
      titulo={historia.titulo}
      fecha={historia.fecha}
      comentario={historia.comentario}
      imagen={historia.imagen}
    />
    )
  
    )}
    {/* {historias.map((datosMap, index) => (
    <Card key={index} isFooterBlurred className=" w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{datosMap.titulo}</p>
        <h4 className="text-white/90 font-medium text-xl">{datosMap.fecha}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={datosMap.imagen}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{datosMap.comentario}</p>
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
    ))} */}
  </>
    )
}