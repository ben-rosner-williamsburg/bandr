import * as React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border ${
        variant === 'default' ? 'bg-card text-card-foreground' : 'bg-secondary text-secondary-foreground'
      } shadow-sm ${className}`}
      {...props}
    />
  )
}

Card.displayName = "Card"

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
}

CardHeader.displayName = "CardHeader"

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
}

CardTitle.displayName = "CardTitle"

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

CardContent.displayName = "CardContent"

