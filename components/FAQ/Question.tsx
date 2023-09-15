import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface propTypes {
  question: string;
  answer: string;
  icon: string;
  id: string;
}

export default function Question(props: propTypes) {
  return (
    <>
      <AccordionItem value={props.id}>
        <AccordionTrigger>
          <div className="flex justify-between w-full px-4">
            <div className="flex flex-row gap-3 items-center">
              <div>
                {/* <img
                  className="h-6 text-black dark:text-white"
                  src={props.icon}
                  alt=""
                /> */}
                <div dangerouslySetInnerHTML={{ __html: props.icon }} />
              </div>
              {props.question}
            </div>
            <div></div>
          </div>
        </AccordionTrigger>
        <div className="w-4/5 pl-12">
          <AccordionContent>{props.answer}</AccordionContent>
        </div>
      </AccordionItem>
    </>
  );
}
