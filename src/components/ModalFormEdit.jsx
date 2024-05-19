import { useContext, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Calendar, Pencil } from "lucide-react";
import { GlobalContext } from "../context/globalContext";

export function ModalFormEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { dataHistoria, setDataHistoria } = useContext(GlobalContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(dataHistoria);
    }
  }, [isOpen, dataHistoria]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setDataHistoria(formData); // Actualizar datos de historia en el contexto global
    onOpenChange(false);
  };

  return (
    <>
      <Button onPress={onOpen} className="text-tiny bg-black/20" color="success" variant="bordered" radius="lg" size="sm">
        <Pencil/>
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
                  value={formData.fecha || ""}
                  onChange={handleInputChange}
                  endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Fecha"
                  placeholder="Ejemplo: Marzo de 2024"
                  variant="bordered"
                />
                <Input
                  name="titulo"
                  value={formData.titulo || ""}
                  onChange={handleInputChange}
                  endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Titulo"
                  placeholder="Título de la historia"
                  variant="bordered"
                />
                <Input
                  name="experiencia"
                  value={formData.experiencia || ""}
                  onChange={handleInputChange}
                  label="Experiencia"
                  placeholder="Describe tu experiencia"
                />
                <Input
                  name="comentario"
                  value={formData.comentario || ""}
                  onChange={handleInputChange}
                  label="Comentario"
                  placeholder="Escribe comentarios"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success" onPress={handleSubmit}>
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}