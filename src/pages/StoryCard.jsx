import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500">By {story.author}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <ArrowUpCircle className="h-4 w-4 text-orange-500 mr-1" />
          <span className="text-sm">{story.points}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;