import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    FACEBOOK_CLIENT_ID: z.string().min(1),
    FACEBOOK_CLIENT_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_DANCE_VIDEO_URL: z.string().min(1),
    NEXT_PUBLIC_MARTIAL_ARTS_VIDEO_URL: z.string().min(1),
    NEXT_PUBLIC_DANCE_MODEL_URL: z.string().min(1),
    NEXT_PUBLIC_MARTIAL_ARTS_MODEL_URL: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    NEXT_PUBLIC_DANCE_VIDEO_URL: process.env.NEXT_PUBLIC_DANCE_VIDEO_URL,
    NEXT_PUBLIC_MARTIAL_ARTS_VIDEO_URL: process.env.NEXT_PUBLIC_MARTIAL_ARTS_VIDEO_URL,
    NEXT_PUBLIC_DANCE_MODEL_URL: process.env.NEXT_PUBLIC_DANCE_MODEL_URL,
    NEXT_PUBLIC_MARTIAL_ARTS_MODEL_URL: process.env.NEXT_PUBLIC_MARTIAL_ARTS_MODEL_URL,
  },
}) 