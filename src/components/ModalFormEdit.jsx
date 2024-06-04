import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Calendar, Pencil } from "lucide-react";
import { useGlobalContext } from "../context/globalContext";
import DatosController from "../controlller/DatosController";

export function ModalFormEdit({ id, titulo, fecha, experiencia, comentario }) {
  const { dataHistoria, setDataHistoria } = useGlobalContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      <Button onClick={datosCard} className="text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
        <Pencil />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar historia "{dataHistoria?.titulo || "Historia sin título"}"
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="fecha"
                  value={dataHistoria?.fecha || ''}
                  onChange={handleInputChange}
                  endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Fecha"
                  placeholder="Ejemplo: Marzo de 2024"
                  variant="bordered"
                />
                <Input
                  name="titulo"
                  value={dataHistoria?.titulo || ''}
                  onChange={handleInputChange}
                  endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Titulo"
                  placeholder="Título de la historia"
                  variant="bordered"
                />
                <Textarea
                  name="experiencia"
                  value={dataHistoria?.experiencia || ''}
                  onChange={handleInputChange}
                  label="Experiencia"
                  placeholder="Describe tu experiencia"
                />
                <Textarea
                  name="comentario"
                  value={dataHistoria?.comentario || ''}
                  onChange={handleInputChange}
                  label="Comentario"
                  placeholder="Escribe comentarios"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success" onPress={() => {DatosController.controladorEditarHistoria(dataHistoria); onClose();}}>
                           Actualizar
                        </Button>
                {/* <Button color="success" onPress={() => { handleSubmit(); onClose(); }}>
                  Actualizar
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
