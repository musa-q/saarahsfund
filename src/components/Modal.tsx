'use client'
import { useEffect, useRef, type ReactNode } from 'react'

// Render only while open. Native modal dialogs contain focus and make the page inert.
export default function Modal({ children, label, onClose, className = '' }: {
  children: ReactNode
  label: string
  onClose: () => void
  className?: string
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current!
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (trigger?.isConnected) trigger.focus()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      className="fixed inset-0 m-0 h-[100dvh] w-screen max-h-none max-w-none border-0 bg-transparent p-0 backdrop:bg-transparent"
    >
      <div
        className={`flex h-full w-full items-center justify-center p-4 ${className}`}
        onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      >
        {children}
      </div>
    </dialog>
  )
}
