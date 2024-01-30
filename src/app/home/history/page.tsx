import HistoryRechargeItem from "@/components/HistoryRechargeItem"
import { Separator } from "@/components/ui/separator"

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center bg-slate-200 w-full lg:w-2/3 mx-auto my-10 rounded-lg">
            <div className="my-10 font-bold text-2xl">
                Purchase History
            </div>
            <HistoryRechargeItem />
            <HistoryRechargeItem />
            <HistoryRechargeItem />
            <HistoryRechargeItem />
            <HistoryRechargeItem />
        </div>
    )
}