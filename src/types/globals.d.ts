/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="next" />
/// <reference types="next-auth" />
/// <reference types="three" />

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

export {} 