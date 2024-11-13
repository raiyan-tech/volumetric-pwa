import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="relative w-full h-[60vh] rounded-lg overflow-hidden mb-8">
        <Image
          src="/hero-image.jpg"
          alt="Traditional Dance and Martial Arts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Experience Culture in 3D
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Immerse yourself in traditional dance and martial arts through volumetric video
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="default" asChild>
              <a href="/auth/login">Login</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/auth/signup">Sign Up</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 