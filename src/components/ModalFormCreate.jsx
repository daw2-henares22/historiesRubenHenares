import { useContext, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Calendar, Image, Pencil, Plus } from "lucide-react";
import { GlobalContext } from "../context/globalContext";

export function ModalFormCreate() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { dataHistoria, editarHistoria } = useContext(GlobalContext);
  const [formData, setFormData] = useState(dataHistoria);

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
    editarHistoria(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button onPress={onOpen} className="rounded-full" color="warning" size="lg">
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
                <Input
                  name="imagen"
                  value={formData.imagen || ""}
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
                <Button color="primary" onPress={handleSubmit}>
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