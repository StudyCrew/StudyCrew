'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/utils'

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

// below we have the designed avatar from the figma file
// we will use this as a reference to create the avatar component
// the CustomAvatar accepts 3 props : image for the image, imageFallback for the text shows in case there is no avatar image and the size prop that can be lg for large size, md for medium size and sm for small size.

// example usage

// <CustomAvatar image="https://example.com/image.jpg" imageFallback="JD" size="lg"/>

export const CustomAvatar = ({
  image,
  imageFallback,
  size = 'lg'
}: {
  image: string
  imageFallback: string
  size: 'sm' | 'md' | 'lg'
}) => {
  return (
    <Avatar
      className={cn(
        size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-6 h-6' : 'h-4 w-4'
      )}
    >
      <AvatarImage src={image} />
      <AvatarFallback
        className={cn(
          size === 'lg'
            ? 'text-[16px]'
            : size === 'md'
              ? 'text-[12px]'
              : 'text-[10px]'
        )}
      >
        {imageFallback}
      </AvatarFallback>
    </Avatar>
  )
}
