import { useState } from "react";
import { Button } from "@digdir/designsystemet-react";

export default function LogSearchPreview({ results }: { results: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Search Results</h2>

      {/* Simple scrollable container */}
      <div
        style={{
          maxHeight: "24rem",
          overflowY: "auto",
          border: "1px solid var(--fds-semantic-border-neutral-subtle)",
          borderRadius: "var(--fds-border_radius-medium)",
          padding: "1rem",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {results.map((line, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  idx !== results.length - 1
                    ? "1px solid var(--fds-semantic-border-neutral-subtle)"
                    : "none",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.875rem" }}>{line}</span>
              <input
                type="checkbox"
                checked={selected.includes(line)}
                onChange={() =>
                  setSelected((prev) =>
                    prev.includes(line)
                      ? prev.filter((x) => x !== line)
                      : [...prev, line]
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
        <Button
          onClick={() => setSelected(results)}
          variant="secondary"
        >
          Select All
        </Button>
        <Button
          onClick={() => console.log("Sending:", selected)}
          disabled={selected.length === 0}
        >
          Send Selected
        </Button>
      </div>
    </div>
  );
}
