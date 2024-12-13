'use client'

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

export function ScrollArea({ className, children, ...props }: ScrollAreaPrimitive.ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar() {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className="flex touch-none select-none transition-colors"
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}
