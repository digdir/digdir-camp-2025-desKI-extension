export function ColoredCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label
      className="
        flex items-center gap-2 cursor-pointer select-none
        relative px-3 py-2 rounded-lg
        hover:bg-[color:var(--ds-color-neutral-surface-hover)]
        transition-colors duration-150
      "
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="
          appearance-none w-5 h-5 rounded-[var(--ds-border-radius-sm)]
          border border-primary
          bg-[var(--ds-color-surface-default)]
          transition-colors duration-150
          checked:bg-[#002c54]
          checked:text-white/80
          checked:flex checked:items-center checked:justify-center
          checked:before:content-['✔'] checked:before:text-white checked:before:text-sm
          cursor-pointer
        "
      />
      <span className="text-[var(--ds-color-text-default)]">{label}</span>
    </label>
  );
}
