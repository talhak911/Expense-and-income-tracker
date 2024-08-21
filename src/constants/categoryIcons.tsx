import FoodIcon from "../assets/icons/food";
import SalaryIcon from "../assets/icons/salary";
import ShoppingIcon from "../assets/icons/shopping";
import SubscriptionIcon from "../assets/icons/subscription";
import TransportationIcon from "../assets/icons/transportation";

export const CATEGORYICON=(category:string)=>{

switch (category) {
    case "Salary" || "Passive Income":
        return <SalaryIcon/>
    case "Passive Income":
        return <SalaryIcon/>
    case "Subscription":
        return <SubscriptionIcon/>
    case "Shopping":
        return <ShoppingIcon/>
    case "Transportation":
        return <TransportationIcon/>
    case "Food":
        return <FoodIcon/>
    default:
        break;
}
}