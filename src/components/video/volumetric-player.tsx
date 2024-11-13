"use client"

import { useEffect, useRef, useState } from "react"
import { VolumetricControls } from "./volumetric-controls"
import { VolumetricScene } from "./volumetric-scene"
import { useToast } from "@/components/ui/use-toast"
import { ErrorBoundary } from "@/components/error-boundary"
import { Loading } from "@/components/loading"

interface VolumetricPlayerProps {
  sourceUrl: string
  initialMode?: "normal" | "ar" | "vr"
}

export function VolumetricPlayer({
  sourceUrl,
  initialMode = "normal",
}: VolumetricPlayerProps) {
  const [mode, setMode] = useState<"normal" | "ar" | "vr">(initialMode)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const handleModeChange = async (newMode: "normal" | "ar" | "vr") => {
    try {
      setIsLoading(true)
      
      if (newMode === "ar") {
        if (!navigator.xr?.isSessionSupported("immersive-ar")) {
          throw new Error("AR is not supported on this device")
        }
      } else if (newMode === "vr") {
        if (!navigator.xr?.isSessionSupported("immersive-vr")) {
          throw new Error("VR is not supported on this device")
        }
      }
      
      setMode(newMode)
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to change viewing mode",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const initPlayer = async () => {
      try {
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to initialize player:", error)
        toast({
          title: "Error",
          description: "Failed to initialize player",
          variant: "destructive",
        })
      }
    }

    initPlayer()
  }, [sourceUrl, toast])

  return (
    <ErrorBoundary>
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        <div ref={containerRef} className="absolute inset-0">
          {isLoading ? (
            <Loading />
          ) : (
            <VolumetricScene sourceUrl={sourceUrl} mode={mode} />
          )}
        </div>
        <VolumetricControls onModeChange={handleModeChange} currentMode={mode} />
      </div>
    </ErrorBoundary>
  )
} 