interface ColorPaletteProps {
  colors: string[]
  label?: string
  size?: 'sm' | 'md'
}

export function ColorPalette({
  colors,
  label,
  size = 'md',
}: ColorPaletteProps) {
  const dim = size === 'sm' ? 'h-8 w-8' : 'h-11 w-11'

  return (
    <div>
      {label && (
        <p className="mb-2 text-sm font-medium text-[var(--color-muted)]">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {colors.map((hex) => (
          <div
            key={hex}
            className={`${dim} rounded-full ring-1 ring-black/8 shadow-sm`}
            style={{ backgroundColor: hex }}
            title={hex}
          />
        ))}
      </div>
    </div>
  )
}
