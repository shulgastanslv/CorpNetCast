import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

const EarningsPage = () => {

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-5">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-lg font-semibold md:text-xl">
          Earnings
        </h1>
      </div>
    </div>
  );
}

export default EarningsPage;