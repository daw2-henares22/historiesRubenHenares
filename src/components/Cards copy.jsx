import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";

export function Cards(){
    return(
    <>
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={400}
      src="https://nextui.org/images/hero-card.jpeg"
      width={400}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">¡Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...</p>
      <Button className=" text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil/>
      </Button>
      <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
        <Trash2/>
      </Button>
    </CardFooter>
  </Card>
  <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={400}
      src="https://nextui.org/images/hero-card.jpeg"
      width={400}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">¡Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...</p>
      <Button className=" text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil/>
      </Button>
      <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
        <Trash2/>
      </Button>
    </CardFooter>
  </Card>
  <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={400}
      src="https://nextui.org/images/hero-card.jpeg"
      width={400}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">¡Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...</p>
      <Button className=" text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil/>
      </Button>
      <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
        <Trash2/>
      </Button>
    </CardFooter>
  </Card>
  <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={400}
      src="https://nextui.org/images/hero-card.jpeg"
      width={400}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">¡Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepai caminando...</p>
      <Button className=" text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
          <Pencil/>
      </Button>
      <Button className="bg-black/20" color="danger" variant="bordered" radius="lg" size="sm">
        <Trash2/>
      </Button>
    </CardFooter>
  </Card>

  <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">VIAJE A NEPAL</p>
        <h4 className="text-white/90 font-medium text-xl">Agosto de 2024</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">¡Una aventura alucinante! 17 días de</p>
            <p className="text-tiny text-white/60">viaje mochilero por un paraiso.</p>
            <p className="text-tiny text-white/60">Recorrimos todo el norte de Nepai</p>
            <p className="text-tiny text-white/60">caminando...</p>
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
  </>
    )
}