import { Mission } from "../mission/mission"
import data from "@/data/data_mission.json"
export function Manager_missions() {
    return (
        <>
            {data?.map((card, index) => (
                <Mission key={`mission_${index}`} title={card?.tittle} body={card?.body} />
            ))
            }
        </>
    )
}