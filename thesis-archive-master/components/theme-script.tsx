const STORAGE_KEY = "thesis-archive-theme";

const getInitializer = () => `
(function() {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    var isDark = stored === "dark";
    if (stored !== "dark" && stored !== "light") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    document.documentElement.classList.toggle("dark", isDark);
  } catch (error) {
    console.warn("Theme initialization failed", error);
  }
})();
`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: getInitializer() }}
      suppressHydrationWarning
    />
  );
}

