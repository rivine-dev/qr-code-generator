import {Card, CardContent} from "@/components/ui/card";
import QRCanvas from "@/components/custom/qr/qr-canvas";

export default function Home() {
  return (
      <div className="flex justify-center">
        <div className='"container max-w-6xl items-center px-6'>
          <Card className="w-100">
            <CardContent>
              <QRCanvas></QRCanvas>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
