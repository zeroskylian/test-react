let e1 = "export 1";
let e2 = "export 2";
export { e2 };
export { e1 as default };
e1 = "export 1 modified";
setTimeout(() => {
  e2 = "export 2 modified";
}, 1000);
