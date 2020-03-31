import * as views from "./Views";
console.log(views);
export default st => `
${views[st.view](st)}`;
