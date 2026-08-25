import * as React from "react"
import { createMap } from "svg-dotted-map"

import { cn } from "@/lib/utils"

export type Marker = {
  lat: number
  lng: number
  size?: number
  pulse?: boolean
}

type MapMarker<M extends Marker> = Omit<M, "lat" | "lng"> & {
  x: number
  y: number
}

type DottedMapProps<M extends Marker = Marker> =
  React.SVGProps<SVGSVGElement> & {
    width?: number
    height?: number
    mapSamples?: number
    markers?: M[]
    dotColor?: string
    markerColor?: string
    dotRadius?: number
    pulse?: boolean
    region?: {
      lat: {
        min: number
        max: number
      }
      lng: {
        min: number
        max: number
      }
    }
    renderMarkerOverlay?: (args: {
      marker: MapMarker<M>
      index: number
      x: number
      y: number
      r: number
    }) => React.ReactNode
  }

function DottedMap<M extends Marker = Marker>({
  width = 150,
  height = 90,
  mapSamples = 7000,
  markers = [],
  dotColor = "currentColor",
  markerColor = "var(--primary)",
  dotRadius = 0.18,
  pulse = true,
  region,
  renderMarkerOverlay,
  className,
  style,
  ...svgProps
}: DottedMapProps<M>) {
  const { points, addMarkers } = React.useMemo(
    () =>
      createMap({
        width,
        height,
        mapSamples,
        region,
      }),
    [height, mapSamples, region, width]
  )

  const processedMarkers = React.useMemo(
    () => addMarkers(markers),
    [addMarkers, markers]
  )

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-white/18", className)}
      style={{ width: "100%", height: "100%", ...style }}
      {...svgProps}
    >
      {points.map((point, index) => (
        <circle
          key={`${point.x}-${point.y}-${index}`}
          cx={point.x}
          cy={point.y}
          r={dotRadius}
          fill={dotColor}
        />
      ))}

      {processedMarkers.map((marker, index) => {
        const x = marker.x
        const y = marker.y
        const r = marker.size ?? dotRadius * 4
        const shouldPulse = pulse
          ? marker.pulse !== false
          : marker.pulse === true

        return (
          <g key={`${marker.x}-${marker.y}-${index}`}>
            <circle cx={x} cy={y} r={r} fill={markerColor} />

            {shouldPulse && (
              <circle
                cx={x}
                cy={y}
                r={r}
                fill="none"
                stroke={markerColor}
                strokeWidth={0.35}
              >
                <animate
                  attributeName="r"
                  dur="1.6s"
                  repeatCount="indefinite"
                  values={`${r};${r * 3}`}
                />
                <animate
                  attributeName="opacity"
                  dur="1.6s"
                  repeatCount="indefinite"
                  values="1;0"
                />
              </circle>
            )}

            {renderMarkerOverlay?.({
              marker: { ...marker, x, y },
              index,
              x,
              y,
              r,
            })}
          </g>
        )
      })}
    </svg>
  )
}

export { DottedMap }
