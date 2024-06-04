import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Calendar, Image, Pencil, Plus } from "lucide-react";
import { useGlobalContext } from "../context/globalContext";
import DatosController from "../controlller/DatosController";

export function ModalFormCreate({ id, titulo, fecha, experiencia, comentario }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { dataHistoria, setDataHistoria } = useGlobalContext();
  

  function datosCard() {
    const historia = {
      id,
      titulo,
      fecha,
      experiencia,
      comentario,
    };
    setDataHistoria(historia);
    onOpen();
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDataHistoria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit() {
    console.log(`ID: ${dataHistoria.id}`);
    console.log('Información de la historia:', dataHistoria);
    // Aquí puedes añadir la lógica para enviar los datos actualizados al servidor
  }

  return (
    <>
      <Button onClick={datosCard} className="rounded-full" color="warning" size="lg">
        <Plus />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar historia "{dataHistoria.titulo || "Historia sin título"}"
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="fecha"
                  value={dataHistoria.fecha || ""}
                  onChange={handleInputChange}
                  endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Fecha"
                  placeholder="Ejemplo: Marzo de 2024"
                  variant="bordered"
                />
                <Input
                  name="titulo"
                  value={dataHistoria.titulo || ""}
                  onChange={handleInputChange}
                  endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Titulo"
                  placeholder="Título de la historia"
                  variant="bordered"
                />
                <Input
                  name="experiencia"
                  value={dataHistoria.experiencia || ""}
                  onChange={handleInputChange}
                  label="Experiencia"
                  placeholder="Describe tu experiencia"
                />
                <Input
                  name="comentario"
                  value={dataHistoria.comentario || ""}
                  onChange={handleInputChange}
                  label="Comentario"
                  placeholder="Escribe comentarios"
                />
                <Input
                  name="imagen"
                  value={dataHistoria.imagen || ""}
                  onChange={handleInputChange}
                  endContent={<Image className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Imagen"
                  placeholder="Escribe la ruta d ela imagen"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={() => { DatosController.controladorNuevaHistoria(dataHistoria); onClose(); }}>
                  Crear Historia
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}