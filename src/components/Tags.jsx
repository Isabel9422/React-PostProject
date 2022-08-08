import {
  FaReact,
  FaVuejs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

function Tags(props) {
  return (
    <div>
      <div onClick={(e) => props.onClick(e.target.closest("[data-id]").dataset.id)}>
        <div className="pb-4">
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="5"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <FaReact className="mr-1 max-h-[15px]" />
              React
            </div>
          </a>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="11"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <FaVuejs className="mr-1 max-h-[15px]" />
              VueJs
            </div>
          </a>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="2"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <FaJava className="mr-1 max-h-[15px]" />
              Java
            </div>
          </a>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="8"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <FaHtml5 />
              <FaCss3Alt className="mr-1 max-h-[15px]" />
              Html y CSS
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="4"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/512/PNG/512/prog-js02_icon-icons.com_50788.png"
                className="mr-1 max-h-[10px]"
                alt="iconoJavaScript"
              />
              Javascript
            </div>
          </a>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="7"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <img src="/adonis.png" className="mr-1 max-h-[10px]" />
              AdonisJs
            </div>
          </a>
          <a
            href="#"
            className="focus:shadow-md focus:shadow-sky-600 rounded-xl ml-4"
          >
            <div
              data-id="1"
              className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-xl bg-white text-gray-700 border"
            >
              <FaPython className="mr-1 max-h-[15px]" />
              Python
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tags;
