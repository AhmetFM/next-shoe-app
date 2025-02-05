import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Searchbar from "./searchbar";

const CustomFilterCollapsible = () => {
  return (
    <>
      <Collapsible>
        {/* Title */}
        <div className="flex items-center justify-between space-x-4 border-b pb-2">
          <h4 className="text-lg font-medium">Marka</h4>
          <CollapsibleTrigger asChild>
            <Button variant={"ghost"}>
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Searchbar small className="mt-4" />
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default CustomFilterCollapsible;
