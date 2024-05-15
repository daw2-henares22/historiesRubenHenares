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
  </>
    )
}