/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 11:52:45 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 12:27:07
 */

/*
  获取child-components下所有的vue文件
*/
let files = require.context('./child-components', false, /\.vue$/)
let modules = {}
files.keys().forEach(key => {
  const moduleName = key.replace(/(\.\/|\.vue)/g, '')
  modules[moduleName] = files(key).default
})
export default modules