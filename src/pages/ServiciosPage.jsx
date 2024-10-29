import {Divider} from "../components/helpers/Divider.jsx";
import {MdOutlineScreenShare, MdOutlineWeb, MdWebAsset} from "react-icons/md";




export const ServiciosPage = () => {
    return (
      <div className={"text-left "}>
            <Divider title={"Servicios"} />
          <div className="grid grid-cols-12    gap-4 ">
              <div
                  className="col-span-12 md:col-span-6 xl:col-span-4   flex flex-col gap-3   items-center p-3 info-background rounded-2xl">
                  <div>
                      <MdWebAsset size={50}/>
                  </div>
                  <h1 className={"text-2xl text-center"}>Desarrollo de Servicios Web</h1>
                  <p className={"text-center"}>
                      Utilizo una variedad de tecnologías en el desarrollo de servicios web,
                      incluyendo <span>Java </span>
                      con <span>Spring Boot</span> <span>Python</span> con <span>Flask</span> y <span>Django</span> , y
                      bases de datos
                      como <span>PostgreSQL</span> . Estas herramientas me permiten construir APIs eficientes y
                      escalables.
                  </p>

              </div>
              <div
                  className="col-span-12 md:col-span-6 xl:col-span-4   flex flex-col gap-3 justify-center items-center p-3 info-background rounded-2xl">
                  <div>
                      <MdOutlineScreenShare size={50}/>
                  </div>
                  <h1 className={"text-2xl text-center"}>Desarrollo de Aplicaciones Web</h1>
                  <p className={"text-center"}>
                      En el desarrollo de aplicaciones web, me enfoco en crear soluciones interactivas y responsivas que
                      ofrecen una excelente experiencia al usuario. Utilizo una variedad de tecnologías, incluyendo
                      <span> React</span> para el frontend, que me permite construir interfaces dinámicas, junto con
                      <span> Java</span> y <span> Spring Boot</span> en el backend para manejar la lógica de negocio y
                      la comunicación con bases de datos.
                  </p>

              </div>


              <div
                  className="col-span-12 md:col-span-6 xl:col-span-4   flex flex-col gap-3  items-center p-3 info-background rounded-2xl">
                  <div>
                      <MdOutlineWeb size={50}/>
                  </div>
                  <h1 className={"text-2xl text-center"}>Desarrollo de Paginas Web</h1>
                  <p className={"text-center"}>
                      En el desarrollo de páginas web, me enfoco en crear soluciones informativas y atractivas. Utilizo
                      <span> HTML</span> y <span> CSS</span> para la estructura y el diseño, junto con
                      <span> JavaScript</span> para interactividad. Además, aprovecho
                      <span> React</span> para componentes reutilizables y
                      <span> Tailwind CSS</span> para estilos responsivos.
                  </p>


              </div>


          </div>


      </div>
    )
}
