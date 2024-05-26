import { Heading1 } from "@/components/@common/typography/heading";
import { Paragraph } from "@/components/@common/typography/paragraph";

export default async function HomePage() {
  return (
    <div className="grid gap-6">
      <Heading1>WEB BFF POC</Heading1>
      <Paragraph>Do stuff here</Paragraph>
    </div>
  );
}
