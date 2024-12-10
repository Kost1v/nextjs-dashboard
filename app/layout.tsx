import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
