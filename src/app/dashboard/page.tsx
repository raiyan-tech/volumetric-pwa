import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VolumetricPlayer } from "@/components/video/volumetric-player"

const DANCE_MODEL_URL = process.env.NEXT_PUBLIC_DANCE_MODEL_URL || ""
const MARTIAL_ARTS_MODEL_URL = process.env.NEXT_PUBLIC_MARTIAL_ARTS_MODEL_URL || ""

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="dance" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dance">Traditional Dance</TabsTrigger>
          <TabsTrigger value="martial-arts">Martial Arts</TabsTrigger>
        </TabsList>
        <TabsContent value="dance">
          <div className="space-y-4">
            <VolumetricPlayer sourceUrl={DANCE_MODEL_URL} initialMode="normal" />
          </div>
        </TabsContent>
        <TabsContent value="martial-arts">
          <div className="space-y-4">
            <VolumetricPlayer sourceUrl={MARTIAL_ARTS_MODEL_URL} initialMode="normal" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 