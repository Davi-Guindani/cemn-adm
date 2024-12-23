import { use } from "react";

type Params = Promise<{ slug: string }>;

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "",
  description: "",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: Params;
}) {
  {
    const params = use(props.params);
    const slug = params.slug;
  }
  return (
    <html lang="en">
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
