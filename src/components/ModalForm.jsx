import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { Calendar, Pencil, Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/globalContext";

export function ModalForm (){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
              <ModalHeader className="flex flex-col gap-1">Editar historia "{formData.titulo || 'Historia sin título'}"</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Fecha"
                  name="fecha"
                  value={formData.fecha || ''}
                  onChange={handleInputChange}
                  placeholder="Ejemplo: Marzo de 2024"
                  variant="bordered"
                />
                <Input
                  endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Título"
                  name="titulo"
                  value={formData.titulo || ''}
                  onChange={handleInputChange}
                  placeholder="Título de la historia"
                  variant="bordered"
                />
                <Input
                  label="Comentario"
                  name="comentario"
                  value={formData.comentario || ''}
                  onChange={handleInputChange}
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