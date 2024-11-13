"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface VolumetricControlsProps {
  onModeChange: (mode: "normal" | "ar" | "vr") => void
  currentMode: "normal" | "ar" | "vr"
}

export function VolumetricControls({
  onModeChange,
  currentMode,
}: VolumetricControlsProps) {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2">
      <Button
        variant={currentMode === "normal" ? "default" : "outline"}
        size="sm"
        onClick={() => onModeChange("normal")}
      >
        Normal
      </Button>
      <Button
        variant={currentMode === "ar" ? "default" : "outline"}
        size="sm"
        onClick={() => onModeChange("ar")}
      >
        AR Mode
      </Button>
      <Button
        variant={currentMode === "vr" ? "default" : "outline"}
        size="sm"
        onClick={() => onModeChange("vr")}
      >
        VR Mode
      </Button>
    </div>
  )
} 