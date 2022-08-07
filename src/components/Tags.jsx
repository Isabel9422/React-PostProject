import {
  FaReact,
  FaVuejs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

function Tags() {
  return (
    <div>
      <div>
        <div className="pb-4">
        <input
        type="button" value="5" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
          <FaReact className="mr-1 max-h-[15px]" />
          React
        </input>

        <input
        type="button" value="11" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
          <FaVuejs className="mr-1 max-h-[15px]" />
          VueJs
        </input>

        <input
        type="button" value="2" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
          <FaJava className="mr-1 max-h-[15px]" />
          Java
        </input>

        <input
        type="button" value="8" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
          <FaHtml5 />
          <FaCss3Alt className="mr-1 max-h-[15px]" />
          Html y CSS
        </input>
        </div>
        <div>
          <input
        type="button" value="4" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
            <img
              src="https://cdn.icon-icons.com/icons2/512/PNG/512/prog-js02_icon-icons.com_50788.png"
              className="mr-1 max-h-[10px]"
              alt="iconoJavaScript"
            />
            Javascript
          </input>

          <input
        type="button" value="7" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
            <img src="/adonis.png" className="mr-1 max-h-[10px]" />
            AdonisJs
          </input>

          <input
        type="button" value="1" className="hover:bg-gradient-to-bl from-white to-slate-500 focus:bg-gradient-to-bl ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
            <FaPython className="mr-1 max-h-[15px]" />
            Python
          </input>
          </div>
      </div>
    </div>
  );
}

export default Tags;
