import { FaReact, FaVuejs, FaJava, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';

function Tags() {
  return (
    <div>
      <div>
  <div 
    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
  >
    <FaReact className="mr-1 max-h-[15px]"/>
    React
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
  >
    <FaVuejs className="mr-1 max-h-[15px]"/>
    VueJs
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
  >
    <FaJava className="mr-1 max-h-[15px]"/>
    Java
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
  >
    <FaHtml5/>
    <FaCss3Alt className="mr-1 max-h-[15px]"/>
    Html y CSS
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-yellow-200 text-yellow-700 border"
  >
    <img src='https://cdn.icon-icons.com/icons2/512/PNG/512/prog-js02_icon-icons.com_50788.png' className="mr-1 max-h-[10px]"
 alt='iconoJavaScript'/>
    Javascript
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-purple-200 text-purple-700 border"
  >
    <img src='/adonis.png' className="mr-1 max-h-[10px]"/>
    AdonisJs
  </div>

  <div
    className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
  >
    <FaPython className="mr-1 max-h-[15px]"/>
    Python
  </div>
</div>
    </div>
  )
}

export default Tags
