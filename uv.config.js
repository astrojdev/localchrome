



// bare
let bServer = "VjFaV2IxVXdNVWhVYTJ4VlZrWndUbHBXVW5Oak1XeDBUVmQwYWsxcldscFdSekExVkZkS1dHVkVSbUZTZWtaNldsY3hSMVpGTlZWVGJXaFlVbFZaZVE9PQ==";







self.__uv$config = {
  prefix: "/@/",
  bare: [
    `${atob(atob(atob(atob(atob(bServer)))))}`
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
