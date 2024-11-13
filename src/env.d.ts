declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    FACEBOOK_CLIENT_ID: string
    FACEBOOK_CLIENT_SECRET: string
    NEXT_PUBLIC_DANCE_VIDEO_URL: string
    NEXT_PUBLIC_MARTIAL_ARTS_VIDEO_URL: string
    NEXT_PUBLIC_DANCE_MODEL_URL: string
    NEXT_PUBLIC_MARTIAL_ARTS_MODEL_URL: string
  }
} 