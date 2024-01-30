import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function RechargeItem({ amount, price, id }: { amount: number, price: number, id: number }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="rounded-lg flex flex-col items-center p-10">
                    <div className="flex flex-col items-center border-2 rounded-lg border-lime-600">
                        <img src="/pngs/diamond.png" alt="" />
                        <div className="font-semibold m-2">
                            {`${amount}`}
                        </div>
                    </div>
                    <div>
                        <div className=" text-gray-400 my-2">Price: </div>
                        <div className="text-black font-semibold mx-2">{`USD ${price}`}</div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Purchase</DialogTitle>
                    <DialogDescription>Please verify the purchase before continue</DialogDescription>
                </DialogHeader>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-green-800 text-xl mb-5">Purchase Details</div>
                        <div className="my-2 flex flex-row"><p className="mx-2 text-gray-400">Product: </p> <p className="font-semibold">{`${amount} gems`}</p></div>
                        <div className="my-2 flex flex-row"><p className="mx-2 text-gray-400">USD: </p> <p className="font-semibold">{`${price}`}</p></div>
                    </div>
                    <Label>Apply Gift Code</Label>
                    <Input className="my-5" type="text" placeholder="Gift Code" />
                </div>
                <DialogFooter>
                    <Button type="submit">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}