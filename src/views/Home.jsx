import { Cards } from "../components/Cards";
import { ModalForm } from "../components/ModalForm";




export function Home(){
    return(
    <>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                Mis historias
        </h2>
        <div className="flex space-x-4 justify-center sm:mx-auto fpx-6 py-12 lg:px-8">
            <Cards/>
        </div>
        <div className="flex justify-end pr-6">
            <ModalForm/>
        </div>
    </>
    )
}