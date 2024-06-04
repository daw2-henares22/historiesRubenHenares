import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { ModalFormEdit } from "./ModalFormEdit";

export function Cards() {
  const { historias } = useContext(GlobalContext);

 async function borrarDatosCard(id) {
    console.log("ID de la historia a borrar:", id);
    try {
      const response = await fetch(`https://json-server-vercel-main-phi.vercel.app/historias/${id}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }            
      console.log(`Historia con ID ${id} borrada exitosamente`);
  } catch (error) {
      console.error('Error al borrar la historia:', error);
  }
} 
  

  return (
    <>
      {historias.map((datosMap, index) => (
        <Card key={index} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
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

            <ModalFormEdit
              id={datosMap.id}
              titulo={datosMap.titulo}
              fecha={datosMap.fecha}
              experiencia={datosMap.experiencia}
              comentario={datosMap.comentario}
            />

            <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm" onClick={() => borrarDatosCard(datosMap.id)}>
              <Trash2 />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}