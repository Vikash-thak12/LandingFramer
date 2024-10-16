import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is Postable free to use?</AccordionTrigger>
          <AccordionContent className="text-sm font-bold text-gray-500">
          Yes, it’s completely free and unlimited! You can convert as many tweets into social media images as you’d like without any restrictions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What social media platforms does this tool support?</AccordionTrigger>
          <AccordionContent className="text-sm font-bold text-gray-500">
          Postable currently supports Twitter, Facebook, Instagram, LinkedIn, and TikTok. We’re constantly working on adding more platforms to our list.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize the created images?</AccordionTrigger>
          <AccordionContent className="text-sm font-bold text-gray-500">
          Yes, you can customize the created images by adding your own text, images, and more. You can also choose from a variety of templates to make your images stand out.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do I need design skills to use this platform?</AccordionTrigger>
          <AccordionContent className="text-sm font-bold text-gray-500">
          No, you don’t need any design skills to use this platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do I need to know the format or size of each social media?</AccordionTrigger>
          <AccordionContent className="text-sm font-bold text-gray-500">
          No, you don’t need to know the format or size of each social media.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  